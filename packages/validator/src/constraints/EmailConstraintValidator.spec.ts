import { EmailConstraintValidator } from './EmailConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Email constraint validator', () => {
    let emailConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        emailConstraintValidator = new EmailConstraintValidator();
        emailConstraintValidator.initialize(constraintDescriptor);
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
