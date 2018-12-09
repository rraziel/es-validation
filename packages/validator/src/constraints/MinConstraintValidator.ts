import { AbstractNumericConstraintValidator } from './AbstractNumericConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Min constraint validator
 */
class MinConstraintValidator extends AbstractNumericConstraintValidator {
    private readonly minimum: number;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super();
        this.minimum = constraintDescriptor.getAttribute<number>('minimum');
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    protected isValidValue(value: number): boolean {
        return value >= this.minimum;
    }

}

export {
    MinConstraintValidator
};
