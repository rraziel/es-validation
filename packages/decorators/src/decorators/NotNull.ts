import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * NotNull decorator, used to define that an element must not be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotNull: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'NotNull');

export {
    NotNull
};
