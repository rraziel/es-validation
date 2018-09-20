import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Constraint validator interface
 * @param <T> Value type
 */
abstract class ConstraintValidator<T> {

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    abstract initialize(constraintDescriptor: ConstraintDescriptor): void;

    /**
     * Test whether the value is valid
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    abstract isValid(value: T, context: ConstraintValidationContext): boolean;

}

export {
    ConstraintValidator
};
