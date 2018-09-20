import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Create a Constraint decorator
 * @param constraintValidator Constraint validation function
 * @return Constraint decorator
 */
function Constraint(constraintValidator: <T>(value: T) => boolean): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Constraint', {
        validator: constraintValidator
    });
}

export {
    Constraint
};
