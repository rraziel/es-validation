import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * AssertTrue decorator, used to define that an element must be true
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const AssertTrue: ValidationDecorator = (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.assert(true));

export {
    AssertTrue
};
