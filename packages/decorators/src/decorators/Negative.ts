import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Negative decorator, used to define that an element must be a negative number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Negative: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Negative', {
    zero: false
});

/**
 * NegativeOrZero decorator, used to define that an element must be a negative number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NegativeOrZero: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Negative', {
    zero: true
}, 'NegativeOrZero');

export {
    Negative,
    NegativeOrZero
};
