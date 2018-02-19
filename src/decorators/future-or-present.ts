import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * FutureOrPresent decorator, used to define that an element must be a date in the future or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const FutureOrPresent: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('FutureOrPresent', target, propertyKey, descriptor, infoBuilder => infoBuilder.future(true));

export {
    FutureOrPresent
};
