import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';

/**
 * Create a Digits decorator, used to define that an element must be a number within the accepted range
 * @param integer  Maximum number of integral digits
 * @param fraction Maximum number of fractional digits
 * @return Digits decorator
 */
function Digits(integer: number, fraction: number): ConstraintDecorator {
    return <T>(target, propertyKey, descriptor) => {
        let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'Digits');

        constraintProperties.attributes = {
            integer: integer,
            fraction: fraction
        };

        addConstraint(constraintProperties);
    };
}

export {
    Digits
};
