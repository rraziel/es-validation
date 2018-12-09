import { TrueConstraintValidator } from './TrueConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

describe('True constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let trueConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        trueConstraintValidator = new TrueConstraintValidator();
    });

    it('considers true boolean values to be valid', () => {
        // given
        const value: boolean = true;
        // when
        const result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers false boolean values to be invalid', () => {
        // given
        const value: boolean = false;
        // when
        const result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
