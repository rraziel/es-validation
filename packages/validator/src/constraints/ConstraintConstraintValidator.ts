import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Constraint constraint validator
 * @param <T> Value type
 */
class ConstraintConstraintValidator<T> implements ConstraintValidator<T> {
    private constraintValidator!: (value: T) => boolean;

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        this.constraintValidator = constraintDescriptor.getAttribute<(value: any) => boolean>('validator')!;
    }

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValid(value: T): boolean {
        return this.constraintValidator(value);
    }

}

export {
    ConstraintConstraintValidator
};
