import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Email decorator, used to define that an element must be a valid email address
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Email: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.email());

export {
    Email
};
