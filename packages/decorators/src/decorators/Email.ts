import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Email decorator, used to define that an element must be a valid email address
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Email: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'Email'));

export {
    Email
};
