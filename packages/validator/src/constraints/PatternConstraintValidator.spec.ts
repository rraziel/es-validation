import { PatternConstraintValidator } from './PatternConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Pattern constraint validator', () => {
    let patternConstraintValidator: ConstraintValidator<any>;
    let constraintValidationContext: ConstraintValidationContext;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;

    beforeEach(() => {
        patternConstraintValidator = new PatternConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'regExp') { return /\d+test\d+/; }
            return undefined;
        });
        patternConstraintValidator.initialize(constraintDescriptor);
    });

    it('considers a value matching the regular expression valid', () => {
        // given
        let value: string = '123test123';
        // when
        let result: boolean = patternConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value not matching the regular expression to be invalid', () => {
        // given
        let value: string = '123tes123';
        // when
        let result: boolean = patternConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
