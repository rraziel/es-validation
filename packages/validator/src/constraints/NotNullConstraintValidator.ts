import { ConstraintValidator } from './ConstraintValidator';

/**
 * NotNull constraint validator
 * @param <T> Value type
 */
class NotNullConstraintValidator<T> implements ConstraintValidator<T> {

    /**
     * Initialize the validator in preparation for isValid calls
     */
    initialize(): void {
        // Nothing to do
    }

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValid(value: T): boolean {
        return value !== null;
    }

}

export {
    NotNullConstraintValidator
};
