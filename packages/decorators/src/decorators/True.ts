import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * True decorator, used to define that an element must be true
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const True: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'True');

export {
    True
};
