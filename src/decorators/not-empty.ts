import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * NotEmpty decorator, used to define that an element must be not be empty
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotEmpty: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('NotEmpty', target, propertyKey, descriptor).notEmpty();

export {
    NotEmpty
};
