import { MaxConstraintValidator } from './MaxConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Max constraint validator', () => {
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    let maxConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'maximum') { return 123; }
            return undefined;
        });
        maxConstraintValidator = new MaxConstraintValidator(constraintDescriptor);
    });

    it('considers a value lower than the maximum to be valid', () => {
        // given
        const value: number = 122;
        // when
        const result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value equal to the maximum to be valid', () => {
        // given
        const value: number = 123;
        // when
        const result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value higher than the maximum to be invalid', () => {
        // given
        const value: number = 124;
        // when
        const result: boolean = maxConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
