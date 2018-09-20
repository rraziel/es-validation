import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * NotNull decorator, used to define that an element must not be null
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NotNull: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(new ConstraintProperties(target, propertyKey, descriptor, 'NotNull'));

export {
    NotNull
};
