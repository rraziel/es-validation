import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Constraint constraint validator
 * @param <T> Value type
 */
class ConstraintConstraintValidator<T> implements ConstraintValidator<T> {
    private readonly constraintValidator: (value: T) => boolean;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        this.constraintValidator = constraintDescriptor.getAttribute<(value: any) => boolean>('validator');
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
