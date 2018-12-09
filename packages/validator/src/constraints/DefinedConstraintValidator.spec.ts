import { DefinedConstraintValidator } from './DefinedConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

describe('AssertUndefined constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let definedConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        definedConstraintValidator = new DefinedConstraintValidator<any>();
    });

    it('considers defined values to be valid', () => {
        // given
        const value: any = 5;
        // when
        const result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers undefined values to be invalid', () => {
        // given
        const value: any = undefined;
        // when
        const result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
