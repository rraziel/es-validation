import { FalseConstraintValidator } from './FalseConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('False constraint validator', () => {
    let falseConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        falseConstraintValidator = new FalseConstraintValidator();
        falseConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers false boolean values to be valid', () => {
        // given
        let value: boolean = false;
        // when
        let result: boolean = falseConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers true boolean values to be invalid', () => {
        // given
        let value: boolean = true;
        // when
        let result: boolean = falseConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
