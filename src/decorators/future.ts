import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Future decorator, used to define that an element must be a date in the future
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Future: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.future());

export {
    Future
};
