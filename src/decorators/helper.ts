import {AbstractInfoBuilder, MethodInfoBuilder, MethodParameterInfoBuilder, PropertyInfoBuilder} from '../metadata';

type ValidationDecorator = <T>(target: Object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

/**
 * Get an information builder (static methods and properties)
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 * @return Information builder
 */
function getInfoBuilderStatic<T>(decoratorName: string, target: Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number): AbstractInfoBuilder<any, any> {
    let infoBuilder: AbstractInfoBuilder<any, any>;

    if (descriptor !== undefined) {
        if (descriptor instanceof Object) {
            throw new Error('Decorator @' + decoratorName + ' cannot be applied to static method ' + target.name + '.' + <string> propertyKey);
        } else if (propertyKey === undefined) {
            infoBuilder = MethodParameterInfoBuilder.of(target, propertyKey, descriptor);
        } else {
            throw new Error('Decorator @' + decoratorName + ' cannot be applied to static method ' + target.name + '.' + <string> propertyKey + ' parameter #' + descriptor);
        }
    } else {
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
 * @return Information builder
 */
function getInfoBuilderInstance<T>(decoratorName: string, target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number): AbstractInfoBuilder<any, any> {
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
 * Get an information builder
 * @param decoratorName Decorator name
 * @param target        Target
 * @param propertyKey   Property key
 * @param descriptor    Descriptor
 * @return Information builder
 */
function getInfoBuilder<T>(decoratorName: string, target: Object|Function, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>|number): AbstractInfoBuilder<any, any> {
    let infoBuilder: AbstractInfoBuilder<any, any>;

    if (target instanceof Function) {
        infoBuilder = getInfoBuilderStatic<T>(decoratorName, target, propertyKey, descriptor);
    } else {
        infoBuilder = getInfoBuilderInstance<T>(decoratorName, target, propertyKey, descriptor);
    }

    return infoBuilder;
}

export {
    getInfoBuilder,
    ValidationDecorator
};
