import { AbstractDateConstraintValidator } from './AbstractDateConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Future constraint validator
 * @param <T> Value type
 */
class FutureConstraintValidator<T> extends AbstractDateConstraintValidator {
    private present!: boolean;

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        this.present = constraintDescriptor.getAttribute<boolean>('present')!;
    }

    /**
     * Test whether the date value is valid
     * @param value Value to validate
     * @param now   Current date/time
     * @return true if the value passes the constraint
     */
    protected isValidDate(value: Date, now: Date): boolean {
        if (this.present) {
            return value >= now;
        } else {
            return value > now;
        }
    }

}

export {
    FutureConstraintValidator
};
