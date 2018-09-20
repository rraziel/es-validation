import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Create a Min decorator, used to define that an element must be a number whose value is higher or equal to the specified minimum
 * @param minimum Minimum
 * @return Min decorator
 */
function Min(minimum: number): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Min', {
        minimum: minimum
    });
}

export {
    Min
};
