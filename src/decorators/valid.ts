import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Valid decorator, used to define that an element's fields must be validated
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Valid: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('Valid', target, propertyKey, descriptor, infoBuilder => infoBuilder.valid());

export {
    Valid
};
