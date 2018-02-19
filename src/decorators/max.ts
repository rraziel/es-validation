import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Max decorator, used to define that an element must be a number whose value is lower or equal to the specified maximum
 * @param maximum Maximum
 * @return Max decorator
 */
function Max(maximum: number): ValidationDecorator {
    return (target, propertyKey, descriptor) => withInfoBuilder('Max', target, propertyKey, descriptor, infoBuilder => infoBuilder.maximum(maximum));
}

export {
    Max
};
