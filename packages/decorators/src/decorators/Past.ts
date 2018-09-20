import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Past decorator, used to define that an element must be a date in the past
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Past: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Past');

    constraintProperties.attributes = {
        present: false
    };

    addConstraint(constraintProperties);
};

/**
 * PastOrPresent decorator, used to define that an element must be a date in the past or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PastOrPresent: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Past');

    constraintProperties.decoratorName = 'PastOrPresent';
    constraintProperties.attributes = {
        present: true
    };

    addConstraint(constraintProperties);
};

export {
    Past,
    PastOrPresent
};
