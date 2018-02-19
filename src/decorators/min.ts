import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Min decorator, used to define that an element must be a number whose value is higher or equal to the specified minimum
 * @param minimum Minimum
 * @return Min decorator
 */
function Min(minimum: number): ValidationDecorator {
    return (target, propertyKey, descriptor) => withInfoBuilder('Min', target, propertyKey, descriptor, infoBuilder => infoBuilder.minimum(minimum));
}

export {
    Min
};
