import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * False decorator, used to define that an element must be false
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const False: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'False'));

export {
    False
};
