import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Null decorator, used to define that an element must be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Null: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Null');

export {
    Null
};
