import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * PositiveOrZero decorator, used to define that an element must be a positive number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PositiveOrZero: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('PositiveOrZero', target, propertyKey, descriptor, infoBuilder => infoBuilder.positive(true));

export {
    PositiveOrZero
};
