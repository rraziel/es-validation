import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * NotNull decorator, used to define that an element must not be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotNull: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('NotNull', target, propertyKey, descriptor, infoBuilder => infoBuilder.notNull());

export {
    NotNull
};
