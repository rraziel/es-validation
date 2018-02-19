import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Positive decorator, used to define that an element must be a positive number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Positive: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('Positive', target, propertyKey, descriptor, infoBuilder => infoBuilder.positive());

export {
    Positive
};
