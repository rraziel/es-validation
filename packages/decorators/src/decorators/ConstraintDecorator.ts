import {
    loadClassDescriptor,
    saveClassDescriptor,
    ClassDescriptorImpl,
    ConstraintDescriptor,
    ConstraintDescriptorImpl,
    MethodDescriptorImpl
} from '../descriptors';
import { ClassConstructor } from '../utils';

/**
 * Constraint decorator
 */
type ConstraintDecorator = <T>(target: object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

/**
 * Throw an error if a decorator is applied to a static method parameter or a static property
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 */
function throwStaticMemberUsageWithDescriptor<T>(decoratorName: string, target: Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number): void {
    if (descriptor instanceof Object) {
        throw new Error(`Decorator @${decoratorName} cannot be applied to static method ${target.name}.${propertyKey as string}`);
    } else {
        throw new Error(`Decorator @${decoratorName} cannot be applied to static method ${target.name}.${propertyKey as string} parameter #${descriptor}`);
    }
}

/**
 * Throw an error for a decorator applied to a static method, a static method parameter or a static property
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 */
function throwStaticMemberUsage<T>(decoratorName: string, target: Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number|undefined): void {
    if (descriptor !== undefined) {
        throwStaticMemberUsageWithDescriptor(decoratorName, target, propertyKey, descriptor);
    } else {
        throw new Error(`Decorator @${decoratorName} cannot be applied to static property ${target.name}.${propertyKey as string}`);
    }
}

/**
 * Check whether the decorator is applied to static members, throwing an exception when that's the case
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 */
function checkStaticMemberUsage<T>(decoratorName: string, target: Object|Function, propertyKey: string|symbol|undefined, descriptor: TypedPropertyDescriptor<T>|number|undefined): void {
    if (target instanceof Function && propertyKey !== undefined) {
        throwStaticMemberUsage(decoratorName, target, propertyKey, descriptor);
    }
}

function updateClassDescriptor<T>(targetClass: ClassConstructor<T>, callback: (classDescriptor: ClassDescriptorImpl<T>) => void): void {
    let classDescriptor: ClassDescriptorImpl<T>|undefined = loadClassDescriptor(targetClass) as ClassDescriptorImpl<T>|undefined;
    if (!classDescriptor) {
        classDescriptor = new ClassDescriptorImpl<T>(targetClass);
    }

    callback(classDescriptor);

    saveClassDescriptor(targetClass, classDescriptor);
}

/**
 * Build a constraint descriptor
 * @param constraintName Constraint name
 * @param attributes     Attributes
 * @return Constraint descriptor
 */
function buildConstraintDescriptor(constraintName: string, attributes?: {[attributeName: string]: any}): ConstraintDescriptor {
    let attributeMap: Map<string, any> = new Map<string, any>();

    if (attributes) {
        for (let attributeName in attributes) {
            attributeMap.set(attributeName, attributes[attributeName]);
        }
    }

    return new ConstraintDescriptorImpl(constraintName, attributeMap);
}

/**
 * Add a parameter constraint to a method descriptor
 * @param methodDescriptor     Method descriptor
 * @param parameterIndex       Parameter index
 * @param constraintDescriptor Constraint descriptor
 * @param <C>                  Class type
 * @param <R>                  Method return type
 */
function addParameterConstraint<C, R>(methodDescriptor: MethodDescriptorImpl<C, R>, parameterIndex: number, constraintDescriptor: ConstraintDescriptor): void {
    methodDescriptor.updateParameterDescriptor(parameterIndex, parameterDescriptor => parameterDescriptor.addConstraintDescriptor(constraintDescriptor));
}

/**
 * Add a constructor parameter constraint
 * @param target               Target
 * @param parameterIndex       Parameter index
 * @param constraintDescriptor Constraint descriptor
 */
function addConstructorParameterConstraint(target: Function, parameterIndex: number, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = target as ClassConstructor<any>;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateConstructorDescriptor(methodDescriptor =>  addParameterConstraint(methodDescriptor, parameterIndex, constraintDescriptor)));
}

/**
 * Add a method parameter constraint
 * @param target               Target
 * @param propertyKey          Property key
 * @param parameterIndex       Parameter index
 * @param constraintDescriptor Constraint descriptor
 */
function addMethodParameterConstraint(target: Object, propertyKey: string|symbol, parameterIndex: number, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = target.constructor as ClassConstructor<any>;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateMethodDescriptor(propertyKey, methodDescriptor => addParameterConstraint(methodDescriptor, parameterIndex, constraintDescriptor)));
}

/**
 * Add a method return constraint
 * @param target               Target
 * @param propertyKey          Parameter index
 * @param constraintDescriptor Constraint descriptor
 */
function addMethodReturnConstraint(target: Object, propertyKey: string|symbol, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = target.constructor as ClassConstructor<any>;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateMethodDescriptor(propertyKey, methodDescriptor => methodDescriptor.addConstraintDescriptor(constraintDescriptor)));
}

/**
 * Add a property constraint
 * @param target               Target
 * @param propertyKey          Property key
 * @param constraintDescriptor Constraint descriptor
 */
function addPropertyConstraint(target: Object, propertyKey: string|symbol, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = target.constructor as ClassConstructor<any>;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updatePropertyDescriptor(propertyKey, propertyDescriptor => propertyDescriptor.addConstraintDescriptor(constraintDescriptor)));
}

/**
 * Add a constraint
 * @param target         Target
 * @param propertyKey    Property key
 * @param descriptor     Descriptor
 * @param constraintName Constraint name
 * @param attributes     Map of attributes
 * @param decoratorName  Decorator name, defaulting to the constraint name
 */
function addConstraint<T>(target: Object|Function, propertyKey: string|symbol|undefined, descriptor: TypedPropertyDescriptor<T>|number|undefined, constraintName: string, attributes?: {[attributeName: string]: any}, decoratorName?: string): void {
    decoratorName = decoratorName || constraintName;
    checkStaticMemberUsage(decoratorName, target, propertyKey, descriptor);

    let constraintDescriptor: ConstraintDescriptor = buildConstraintDescriptor(constraintName, attributes);

    if (target instanceof Function) {
        addConstructorParameterConstraint(target, descriptor as number, constraintDescriptor);
    } else if (descriptor !== undefined) {
        if (descriptor instanceof Object) {
            addMethodReturnConstraint(target, propertyKey!, constraintDescriptor);
        } else {
            addMethodParameterConstraint(target, propertyKey!, descriptor, constraintDescriptor);
        }
    } else {
        addPropertyConstraint(target, propertyKey!, constraintDescriptor);
    }
}

export {
    addConstraint,
    ConstraintDecorator
};
