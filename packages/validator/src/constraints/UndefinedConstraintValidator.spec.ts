import { UndefinedConstraintValidator } from './UndefinedConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('Undefined constraint validator', () => {
    let undefinedConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        undefinedConstraintValidator = new UndefinedConstraintValidator<any>();
    });

    it('treats undefined values as valid', () => {
        // given
        let value: any = undefined;
        // when
        let result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('treats defined values as invalid', () => {
        // given
        let value: any = 5;
        // when
        let result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
