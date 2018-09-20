import { TrueConstraintValidator } from './TrueConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('True constraint validator', () => {
    let trueConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        trueConstraintValidator = new TrueConstraintValidator();
        trueConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers true boolean values to be valid', () => {
        // given
        let value: boolean = true;
        // when
        let result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers false boolean values to be invalid', () => {
        // given
        let value: boolean = false;
        // when
        let result: boolean = trueConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
