import {AbstractInfoBuilder, MethodInfoBuilder, MethodParameterInfoBuilder, PropertyInfoBuilder} from '../metadata';

type ValidationDecorator = <T>(target: Object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

/**
 * Get an information builder (static methods and properties)
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 * @param callback      Callback that receives an information builder
 */
function getInfoBuilderStatic<T>(decoratorName: string, target: Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number, callback: (infoBuilder: AbstractInfoBuilder<any, any>) => void): AbstractInfoBuilder<any, any> {
    let infoBuilder: AbstractInfoBuilder<any, any>;

    if (descriptor !== undefined && descriptor instanceof Object) {
        if (propertyKey === undefined) {
            infoBuilder = MethodInfoBuilder.of(target, propertyKey);
        } else {
            throw new Error('Decorator @' + decoratorName + ' cannot be applied to static method ' + target.name + '.' + <string> propertyKey);
        }
    } else if (descriptor !== undefined && !(descriptor instanceof Object)) {
        if (propertyKey === undefined) {
            infoBuilder = MethodParameterInfoBuilder.of(target, propertyKey, descriptor);
        } else {
            throw new Error('Decorator @' + decoratorName + ' cannot be applied to static method ' + target.name + '.' + <string> propertyKey + ' parameter #' + descriptor);
        }
    } else if (descriptor === undefined) {
        throw new Error('Decorator @' + decoratorName + ' cannot be applied to static property ' + target.name + '.' + <string> propertyKey);
    }

    return infoBuilder;
}

/**
 * Get an information builder (instance methods and properties)
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 * @param callback      Callback that receives an information builder
 */
function getInfoBuilderInstance<T>(decoratorName: string, target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number, callback: (infoBuilder: AbstractInfoBuilder<any, any>) => void): AbstractInfoBuilder<any, any> {
    let infoBuilder: AbstractInfoBuilder<any, any>;

    if (descriptor !== undefined && descriptor instanceof Object) {
        infoBuilder = MethodInfoBuilder.of(target, propertyKey);
    } else if (descriptor !== undefined && !(descriptor instanceof Object)) {
        infoBuilder = MethodParameterInfoBuilder.of(target, propertyKey, descriptor);
     } else if (descriptor === undefined) {
        infoBuilder = PropertyInfoBuilder.of(target, propertyKey);
    }

    return infoBuilder;
}

/**
 * Perform an operation with an information builder
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 * @param callback      Callback that receives an information builder
 */
function withInfoBuilder<T>(decoratorName: string, target: Object|Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number, callback: (infoBuilder: AbstractInfoBuilder<any, any>) => void): void {
    let infoBuilder: AbstractInfoBuilder<any, any>;

    if (target instanceof Function) {
        infoBuilder = getInfoBuilderStatic<T>(decoratorName, target, propertyKey, descriptor, callback);
    } else {
        infoBuilder = getInfoBuilderInstance<T>(decoratorName, target, propertyKey, descriptor, callback);
    }

    callback(infoBuilder);
}

export {
    withInfoBuilder,
    ValidationDecorator
};
