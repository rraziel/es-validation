import { DefinedConstraintValidator } from './DefinedConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('AssertUndefined constraint validator', () => {
    let definedConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        definedConstraintValidator = new DefinedConstraintValidator<any>();
    });

    it('considers defined values to be valid', () => {
        // given
        let value: any = 5;
        // when
        let result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers undefined values to be invalid', () => {
        // given
        let value: any = undefined;
        // when
        let result: boolean = definedConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
