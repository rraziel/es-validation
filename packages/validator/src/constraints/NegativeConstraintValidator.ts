import { AbstractNumericConstraintValidator } from './AbstractNumericConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Negative constraint validator
 */
class NegativeConstraintValidator extends AbstractNumericConstraintValidator {
    private readonly zero: boolean;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super();
        this.zero = constraintDescriptor.getAttribute<boolean>('zero');
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: number): boolean {
        if (this.zero) {
            return value <= 0;
        } else {
            return value < 0;
        }
    }

}

export {
    NegativeConstraintValidator
};
