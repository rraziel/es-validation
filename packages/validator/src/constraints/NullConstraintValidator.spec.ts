import { NullConstraintValidator } from './NullConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('Null constraint validator', () => {
    let nullConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        nullConstraintValidator = new NullConstraintValidator<any>();
    });

    it('treats null values as valid', () => {
        // given
        let value: any = null;
        // when
        let result: boolean = nullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('treats non-null values as invalid', () => {
        // given
        let value: any = 5;
        // when
        let result: boolean = nullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
