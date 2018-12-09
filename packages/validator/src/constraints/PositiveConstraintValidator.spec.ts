import { PositiveConstraintValidator } from './PositiveConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Positive constraint validator', () => {
    const constraintValidationContext: ConstraintValidationContext = createMockInstance(ConstraintValidationContext as any);
    const constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let positiveConstraintValidator: ConstraintValidator<any>;

    beforeEach(() => {
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
    });

    describe('with a strictly positive constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? false : undefined);
            positiveConstraintValidator = new PositiveConstraintValidator(constraintDescriptor);
        });

        it('considers strictly positive numbers to be valid', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly positive numbers to be valid (floating-point)', () => {
            // given
            const value: number = 0.0001;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be invalid', () => {
            // given
            const value: number = 0;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

        it('considers negative numbers to be invalid', () => {
            // given
            const value: number = -123;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

    describe('with a positive or zero constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? true : undefined);
            positiveConstraintValidator = new PositiveConstraintValidator(constraintDescriptor);
        });

        it('considers strictly positive numbers to be valid', () => {
            // given
            const value: number = 123;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly positive numbers to be valid (floating-point)', () => {
            // given
            const value: number = 0.0001;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be valid', () => {
            // given
            const value: number = 0;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers negative numbers to be invalid', () => {
            // given
            const value: number = -123;
            // when
            const result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

});
