import {AbstractInfoBuilder, MethodInfoBuilder, MethodParameterInfoBuilder, PropertyInfoBuilder} from '../metadata';

type ValidationDecorator = <T>(target: Object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

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

    if (target instanceof Object && descriptor !== undefined && descriptor instanceof Object) {
        infoBuilder = MethodInfoBuilder.of(target, propertyKey);
    } else if (target instanceof Object && descriptor !== undefined && !(descriptor instanceof Object)) {
        infoBuilder = MethodParameterInfoBuilder.of(target, propertyKey, descriptor);
    } else if (target instanceof Object && descriptor === undefined) {
        infoBuilder = PropertyInfoBuilder.of(target, propertyKey);
    } else {
        throw new Error('Decorator @' + decoratorName + ' cannot be applied to a class');
    }

    callback(infoBuilder);
}

export {
    withInfoBuilder,
    ValidationDecorator
};
