import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Defined decorator, used to define that an element must be defined
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Defined: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Defined');

export {
    Defined
};
