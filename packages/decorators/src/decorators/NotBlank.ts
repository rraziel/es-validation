import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * NotBlank decorator, used to define that an element must be not be null and contain at least one non-white character
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotBlank: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'NotBlank'));

export {
    NotBlank
};
