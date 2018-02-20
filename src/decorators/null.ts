import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * Null decorator, used to define that an element must be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Null: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('Null', target, propertyKey, descriptor).null();

export {
    Null
};
