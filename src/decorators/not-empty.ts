import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * NotEmpty decorator, used to define that an element must be not be empty
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotEmpty: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('NotEmpty', target, propertyKey, descriptor, infoBuilder => infoBuilder.notEmpty());

export {
    NotEmpty
};
