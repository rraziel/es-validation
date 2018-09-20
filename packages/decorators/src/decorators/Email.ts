import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Email decorator, used to define that an element must be a valid email address
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Email: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Email');

export {
    Email
};
