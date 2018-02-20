import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * NotBlank decorator, used to define that an element must be not be null and contain at least one non-white character
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotBlank: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('NotBlank', target, propertyKey, descriptor).notBlank();

export {
    NotBlank
};
