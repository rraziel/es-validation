import { FalseConstraintValidator } from './FalseConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

describe('False constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let falseConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        falseConstraintValidator = new FalseConstraintValidator();
    });

    it('considers false boolean values to be valid', () => {
        // given
        const value: boolean = false;
        // when
        const result: boolean = falseConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers true boolean values to be invalid', () => {
        // given
        const value: boolean = true;
        // when
        const result: boolean = falseConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
