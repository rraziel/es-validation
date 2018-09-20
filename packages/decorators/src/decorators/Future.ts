import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Future decorator, used to define that an element must be a date in the future
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Future: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties(target, propertyKey, descriptor, 'Future');

    constraintProperties.attributes = {
        present: false
    };

    addConstraint(constraintProperties);
};

/**
 * FutureOrPresent decorator, used to define that an element must be a date in the future or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const FutureOrPresent: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties(target, propertyKey, descriptor, 'Future');

    constraintProperties.decoratorName = 'FutureOrPresent';
    constraintProperties.attributes = {
        present: true
    };

    addConstraint(constraintProperties);
};

export {
    Future,
    FutureOrPresent
};
