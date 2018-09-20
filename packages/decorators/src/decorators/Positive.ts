import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Positive decorator, used to define that an element must be a positive number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Positive: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Positive', {
    zero: false
});

/**
 * PositiveOrZero decorator, used to define that an element must be a positive number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PositiveOrZero: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Positive', {
    zero: true
}, 'PositiveOrZero');

export {
    Positive,
    PositiveOrZero
};
