import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Valid decorator, used to define that an element's fields must be validated
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Valid: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Valid');

export {
    Valid
};
