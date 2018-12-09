import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Positive decorator, used to define that an element must be a positive number
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Positive: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Positive');

    constraintProperties.attributes = {
        zero: false
    };

    addConstraint(constraintProperties);
};

/**
 * PositiveOrZero decorator, used to define that an element must be a positive number or zero
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PositiveOrZero: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Positive');

    constraintProperties.decoratorName = 'PositiveOrZero';
    constraintProperties.attributes = {
        zero: true
    };

    addConstraint(constraintProperties);
};

export {
    Positive,
    PositiveOrZero
};
