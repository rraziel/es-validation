import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * NotEmpty decorator, used to define that an element must be not be empty
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotEmpty: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'NotEmpty');

export {
    NotEmpty
};
