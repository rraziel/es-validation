import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * True decorator, used to define that an element must be true
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const True: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'True'));

export {
    True
};
