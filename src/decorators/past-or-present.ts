import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * PastOrPresent decorator, used to define that an element must be a date in the past or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PastOrPresent: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.past(true));

export {
    PastOrPresent
};
