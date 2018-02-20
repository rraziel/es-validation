import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * NotNull decorator, used to define that an element must not be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotNull: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('NotNull', target, propertyKey, descriptor).notNull();

export {
    NotNull
};
