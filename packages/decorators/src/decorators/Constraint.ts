import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Constraint decorator
 * @param constraintValidator Constraint validation function
 * @return Constraint decorator
 */
function Constraint(constraintValidator: <T>(value: T) => boolean): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        const constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Constraint');

        constraintProperties.attributes = {
            validator: constraintValidator
        };

        addConstraint(constraintProperties);
    };
}

export {
    Constraint
};
