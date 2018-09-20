import { ConstraintProperties } from './ConstraintProperties';
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
 * Get a decorator name from constraint properties
 * @param constraintProperties Constraint properties
 */
function getDecoratorName<T>(constraintProperties: ConstraintProperties<T>): string {
    return constraintProperties.decoratorName || constraintProperties.constraintName;
}

/**
 * Throw an error if a decorator is applied to a static method parameter or a static property
 * @param constraintProperties Constraint properties
 */
function throwStaticMemberUsageWithDescriptor<T>(constraintProperties: ConstraintProperties<T>): void {
    let decoratorName: string = getDecoratorName(constraintProperties);
    let className: string = (constraintProperties.target as Function).name;
    let methodName: string = constraintProperties.propertyKey as string;

    if (constraintProperties.descriptor instanceof Object) {
        throw new Error(`Decorator @${decoratorName} cannot be applied to static method ${className}.${methodName}`);
    } else {
        throw new Error(`Decorator @${decoratorName} cannot be applied to static method ${className}.${methodName} parameter #${constraintProperties.descriptor}`);
    }
}

/**
 * Throw an error for a decorator applied to a static method, a static method parameter or a static property
 * @param constraintProperties Constraint properties
 */
function throwStaticMemberUsage<T>(constraintProperties: ConstraintProperties<T>): void {
    if (constraintProperties.descriptor !== undefined) {
        throwStaticMemberUsageWithDescriptor(constraintProperties);
    } else {
        let decoratorName: string = getDecoratorName(constraintProperties);
        throw new Error(`Decorator @${decoratorName} cannot be applied to static property ${(constraintProperties.target as Function).name}.${constraintProperties.propertyKey as string}`);
    }
}

/**
 * Update a class descriptor
 * @param targetClass Target class
 * @param callback    Callback
 */
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
 * @param constraintProperties Constraint properties
 * @return Constraint descriptor
 */
function buildConstraintDescriptor<T>(constraintProperties: ConstraintProperties<T>): ConstraintDescriptor {
    let constraintName: string = constraintProperties.constraintName;
    let attributeMap: Map<string, any> = new Map<string, any>();

    if (constraintProperties.attributes) {
        let attributes: {[attributeName: string]: any} = constraintProperties.attributes;

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
 * @param constraintProperties Constraint properties
 * @param constraintDescriptor Constraint descriptor
 */
function addConstructorParameterConstraint<T>(constraintProperties: ConstraintProperties<T>, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = constraintProperties.target as ClassConstructor<any>;
    let parameterIndex: number = constraintProperties.descriptor as number;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateConstructorDescriptor(methodDescriptor =>  addParameterConstraint(methodDescriptor, parameterIndex, constraintDescriptor)));
}

/**
 * Add a method parameter constraint
 * @param constraintProperties Constraint properties
 * @param constraintDescriptor Constraint descriptor
 */
function addMethodParameterConstraint<T>(constraintProperties: ConstraintProperties<T>, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = constraintProperties.target.constructor as ClassConstructor<any>;
    let propertyKey: string|symbol = constraintProperties.propertyKey!;
    let parameterIndex: number = constraintProperties.descriptor as number;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateMethodDescriptor(propertyKey, methodDescriptor => addParameterConstraint(methodDescriptor, parameterIndex, constraintDescriptor)));
}

/**
 * Add a method return constraint
 * @param constraintProperties Constraint properties
 * @param constraintDescriptor Constraint descriptor
 */
function addMethodReturnConstraint<T>(constraintProperties: ConstraintProperties<T>, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = constraintProperties.target.constructor as ClassConstructor<any>;
    let propertyKey: string|symbol = constraintProperties.propertyKey!;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updateMethodDescriptor(propertyKey, methodDescriptor => methodDescriptor.addConstraintDescriptor(constraintDescriptor)));
}

/**
 * Add a property constraint
 * @param constraintProperties Constraint properties
 * @param constraintDescriptor Constraint descriptor
 */
function addPropertyConstraint<T>(constraintProperties: ConstraintProperties<T>, constraintDescriptor: ConstraintDescriptor): void {
    let targetClass: ClassConstructor<any> = constraintProperties.target.constructor as ClassConstructor<any>;
    let propertyKey: string|symbol = constraintProperties.propertyKey!;
    updateClassDescriptor(targetClass, classDescriptor => classDescriptor.updatePropertyDescriptor(propertyKey, propertyDescriptor => propertyDescriptor.addConstraintDescriptor(constraintDescriptor)));
}

/**
 * Add a constraint
 * @param constraintProperties Constraint properties
 */
function addConstraint<T>(constraintProperties: ConstraintProperties<T>): void {
    if (constraintProperties.appliesToStaticMember()) {
        throwStaticMemberUsage(constraintProperties);
    }

    let constraintDescriptor: ConstraintDescriptor = buildConstraintDescriptor(constraintProperties);

    if (constraintProperties.appliesToConstructorParameter()) {
        addConstructorParameterConstraint(constraintProperties, constraintDescriptor);
    } else if (constraintProperties.appliesToMethodReturn()) {
        addMethodReturnConstraint(constraintProperties, constraintDescriptor);
    } else if (constraintProperties.appliesToMethodParameter()) {
        addMethodParameterConstraint(constraintProperties, constraintDescriptor);
    } else if (constraintProperties.appliesToProperty()) {
        addPropertyConstraint(constraintProperties, constraintDescriptor);
    }
}

export {
    addConstraint
};
