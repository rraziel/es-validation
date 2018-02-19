import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Past decorator, used to define that an element must be a date in the past
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Past: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('Past', target, propertyKey, descriptor, infoBuilder => infoBuilder.past());

export {
    Past
};
