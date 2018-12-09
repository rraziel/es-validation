import { MinConstraintValidator } from './MinConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Min constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let minConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'minimum') { return 123; }
            return undefined;
        });
        minConstraintValidator = new MinConstraintValidator(constraintDescriptor);
    });

    it('considers a value higher than the minimum to be valid', () => {
        // given
        const value: number = 124;
        // when
        const result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value equal to the minimum to be valid', () => {
        // given
        const value: number = 123;
        // when
        const result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a value lower than the minimum to be invalid', () => {
        // given
        const value: number = 122;
        // when
        const result: boolean = minConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
