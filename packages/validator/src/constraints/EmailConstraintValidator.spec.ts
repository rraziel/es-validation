import { EmailConstraintValidator } from './EmailConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('Email constraint validator', () => {
    let emailConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        emailConstraintValidator = new EmailConstraintValidator();
    });

    it('considers email addresses to be valid', () => {
        // given
        let value: string = 'a@b.com';
        // when
        let result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers other strings to be invalid', () => {
        // given
        let value: string = 'xyz';
        // when
        let result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
