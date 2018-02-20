import {getInfoBuilder, ValidationDecorator} from './helper';

/**
 * FutureOrPresent decorator, used to define that an element must be a date in the future or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const FutureOrPresent: ValidationDecorator = (target, propertyKey, descriptor) => getInfoBuilder('FutureOrPresent', target, propertyKey, descriptor).future(true);

export {
    FutureOrPresent
};
