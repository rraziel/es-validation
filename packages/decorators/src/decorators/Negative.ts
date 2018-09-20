import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Negative decorator, used to define that an element must be a negative number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Negative: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Negative');

    constraintProperties.attributes = {
        zero: false
    };

    addConstraint(constraintProperties);
};

/**
 * NegativeOrZero decorator, used to define that an element must be a negative number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const NegativeOrZero: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Negative');

    constraintProperties.decoratorName = 'NegativeOrZero';
    constraintProperties.attributes = {
        zero: true
    };

    addConstraint(constraintProperties);
};

export {
    Negative,
    NegativeOrZero
};
