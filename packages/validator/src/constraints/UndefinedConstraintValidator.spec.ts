import { UndefinedConstraintValidator } from './UndefinedConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Undefined constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let undefinedConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        undefinedConstraintValidator = new UndefinedConstraintValidator<any>();
    });

    it('treats undefined values as valid', () => {
        // given
        const value: any = undefined;
        // when
        const result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('treats defined values as invalid', () => {
        // given
        const value: any = 5;
        // when
        const result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
