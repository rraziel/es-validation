import { NotBlankConstraintValidator } from './NotBlankConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('NotBlank constraint validator', () => {
    let notBlankConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;

    beforeEach(() => {
        notBlankConstraintValidator = new NotBlankConstraintValidator();
    });

    it('considers non-blank strings to be valid', () => {
        // given
        let value: string = ' t e s t ';
        // when
        let result: boolean = notBlankConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers blank strings to be invalid', () => {
        // given
        let value: string = '  \t  ';
        // when
        let result: boolean = notBlankConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
