import { NotNullConstraintValidator } from './NotNullConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('NotNull constraint validator', () => {
    let notNullConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        notNullConstraintValidator = new NotNullConstraintValidator<any>();
    });

    it('considers non-null values to be valid', () => {
        // given
        let value: any = 5;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers null values to be invalid', () => {
        // given
        let value: any = null;
        // when
        let result: boolean = notNullConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
