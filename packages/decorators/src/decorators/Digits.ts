import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Create a Digits decorator, used to define that an element must be a number within the accepted range
 * @param integer  Maximum number of integral digits
 * @param fraction Maximum number of fractional digits
 * @return Digits decorator
 */
function Digits(integer: number, fraction: number): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Digits', {
        integer: integer,
        fraction: fraction
    });
}

export {
    Digits
};
