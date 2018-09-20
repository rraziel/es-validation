import { NotNullConstraintValidator } from './NotNullConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('NotNull constraint validator', () => {
    let notNullConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        notNullConstraintValidator = new NotNullConstraintValidator<any>();
    });

    it('treats non-null values as valid', () => {
        // given
        let value: any = 5;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('treats null values as invalid', () => {
        // given
        let value: any = null;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
