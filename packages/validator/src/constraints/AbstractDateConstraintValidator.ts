import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintValidationContext } from '../validation';

/**
 * Abstract date constraint validator
 */
abstract class AbstractDateConstraintValidator extends AbstractConstraintValidator<Date> {

    /**
     * Class constructor
     */
    constructor() {
        super(Date);
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    isValidValue(value: Date, context: ConstraintValidationContext): boolean {
        let now: Date = context.getValidator().getDateProvider().getDate();
        return this.isValidDate(value, now);
    }

    /**
     * Test whether the date value is valid
     * @param value Value to validate
     * @param now   Current date/time
     * @return true if the value passes the constraint
     */
    protected abstract isValidDate(value: Date, now: Date): boolean;

}

export {
    AbstractDateConstraintValidator
};
