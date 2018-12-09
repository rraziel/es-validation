import { NegativeConstraintValidator } from './NegativeConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Negative constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let negativeConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
    });

    describe('with a strictly negative constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? false : undefined);
            negativeConstraintValidator = new NegativeConstraintValidator(constraintDescriptor);
        });

        it('considers strictly negative numbers to be valid', () => {
            // given
            const value: number = -123;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly negative numbers to be valid (floating-point)', () => {
            // given
            const value: number = -0.0001;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be invalid', () => {
            // given
            const value: number = 0;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

        it('considers positive numbers to be invalid', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

    describe('with a negative or zero constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? true : undefined);
            negativeConstraintValidator = new NegativeConstraintValidator(constraintDescriptor);
        });

        it('considers strictly negative numbers to be valid', () => {
            // given
            const value: number = -123;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly negative numbers to be valid (floating-point)', () => {
            // given
            const value: number = -0.0001;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be valid', () => {
            // given
            const value: number = 0;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers positive numbers to be invalid', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

});
