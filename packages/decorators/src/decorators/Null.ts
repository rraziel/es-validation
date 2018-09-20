import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Null decorator, used to define that an element must be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Null: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'Null'));

export {
    Null
};
