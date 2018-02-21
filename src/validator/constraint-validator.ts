import {ConstraintValidationContext} from './constraint-validation-context';
import {ConstraintDecorator} from '../decorators';

/**
 * Constraint validator interface
 * @param <C> Constraint decorator type
 * @param <T> Value type
 */
interface ConstraintValidator<C extends ConstraintDecorator, T> {

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDecorator Constraint decorator
     */
    initialize(constraintDecorator: ConstraintDecorator): void;

    /**
     * Test whether the value is valid
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    isValid<T>(value: T, context: ConstraintValidationContext): boolean;

}

export {
    ConstraintValidator
};
