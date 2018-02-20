import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * NegativeOrZero decorator, used to define that an element must be a negative number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NegativeOrZero: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('NegativeOrZero', target, propertyKey, descriptor).negative(true);

export {
    NegativeOrZero
};
