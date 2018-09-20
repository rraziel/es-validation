import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * False decorator, used to define that an element must be false
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const False: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'False');

export {
    False
};
