import { EmailConstraintValidator } from './EmailConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Email constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let emailConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        emailConstraintValidator = new EmailConstraintValidator();
    });

    it('considers email addresses to be valid', () => {
        // given
        const value: string = 'a@b.com';
        // when
        const result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers other strings to be invalid', () => {
        // given
        const value: string = 'xyz';
        // when
        const result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
