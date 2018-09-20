import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Defined decorator, used to define that an element must be defined
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Defined: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'Defined'));

export {
    Defined
};
