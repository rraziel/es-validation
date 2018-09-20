import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Undefined decorator, used to define that an element must be undefined
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Undefined: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Undefined');

export {
    Undefined
};
