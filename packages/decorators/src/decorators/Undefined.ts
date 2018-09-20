import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Undefined decorator, used to define that an element must be undefined
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Undefined: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'Undefined'));

export {
    Undefined
};
