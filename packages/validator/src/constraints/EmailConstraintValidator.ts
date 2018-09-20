import { AbstractConstraintValidator } from './AbstractConstraintValidator';

/**
 * Email constraint validator
 */
class EmailConstraintValidator extends AbstractConstraintValidator<string> {
    private static readonly REGEXP: RegExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;

    /**
     * Class constructor
     */
    constructor() {
        super(String);
    }

    /**
     * Test whether the value is valid
     * @param value Value to validate
     * @return true if the value passes the constraint
     */
    isValidValue(value: string): boolean {
        return EmailConstraintValidator.REGEXP.test(value);
    }

}

export {
    EmailConstraintValidator
};
