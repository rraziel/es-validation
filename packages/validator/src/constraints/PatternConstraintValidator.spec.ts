import { PatternConstraintValidator } from './PatternConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Pattern constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let patternConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'regExp') { return /\d+test\d+/; }
            return undefined;
        });
        patternConstraintValidator = new PatternConstraintValidator(constraintDescriptor);
    });

    it('considers a value matching the regular expression valid', () => {
        // given
        const value: string = '123test123';
        // when
        const result: boolean = patternConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value not matching the regular expression to be invalid', () => {
        // given
        const value: string = '123tes123';
        // when
        const result: boolean = patternConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
