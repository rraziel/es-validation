import { NotEmptyConstraintValidator } from './NotEmptyConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('NotEmpty constraint validator', () => {
    let notEmptyConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        notEmptyConstraintValidator = new NotEmptyConstraintValidator();
    });

    it('considers non-empty elements to be valid', () => {
        // given
        let value: Array<number> = [1];
        // when
        let result: boolean = notEmptyConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers empty elements to be invalid', () => {
        // given
        let value: Array<number> = [];
        // when
        let result: boolean = notEmptyConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
