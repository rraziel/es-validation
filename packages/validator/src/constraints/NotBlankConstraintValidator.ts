import { AbstractConstraintValidator } from './AbstractConstraintValidator';

/**
 * NotBlank constraint validator
 */
class NotBlankConstraintValidator extends AbstractConstraintValidator<string> {
    private static readonly REGEXP: RegExp = /[^\s]+/;

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
        return NotBlankConstraintValidator.REGEXP.test(value);
    }

}

export {
    NotBlankConstraintValidator
};
