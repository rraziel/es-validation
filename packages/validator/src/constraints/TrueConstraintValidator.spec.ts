import { TrueConstraintValidator } from './TrueConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('False constraint validator', () => {
    let emailConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        emailConstraintValidator = new TrueConstraintValidator();
    });

    it('considers true boolean values to be valid', () => {
        // given
        let value: boolean = true;
        // when
        let result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers false boolean values to be invalid', () => {
        // given
        let value: boolean = false;
        // when
        let result: boolean = emailConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
