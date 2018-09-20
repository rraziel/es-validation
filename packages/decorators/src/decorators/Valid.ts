import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Valid decorator, used to define that an element's fields must be validated
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Valid: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'Valid'));

export {
    Valid
};
