import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * AssertFalse decorator, used to define that an element must be false
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const AssertFalse: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder('AssertFalse', target, propertyKey, descriptor, infoBuilder => infoBuilder.assert(false));

export {
    AssertFalse
};
