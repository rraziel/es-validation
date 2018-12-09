import { AbstractDateConstraintValidator } from './AbstractDateConstraintValidator';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Past constraint validator
 */
class PastConstraintValidator extends AbstractDateConstraintValidator {
    private readonly present: boolean;

    /**
     * Class constructor
     * @param constraintDescriptor Constraint descriptor
     */
    constructor(constraintDescriptor: ConstraintDescriptor) {
        super();
        this.present = constraintDescriptor.getAttribute<boolean>('present');
    }

    /**
     * Test whether the date value is valid
     * @param value Value to validate
     * @param now   Current date/time
     * @return true if the value passes the constraint
     */
    protected isValidDate(value: Date, now: Date): boolean {
        if (this.present) {
            return value <= now;
        } else {
            return value < now;
        }
    }

}

export {
    PastConstraintValidator
};
