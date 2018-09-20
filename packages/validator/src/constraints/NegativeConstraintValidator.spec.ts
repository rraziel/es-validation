import { NegativeConstraintValidator } from './NegativeConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Negative constraint validator', () => {
    let negativeConstraintValidator: ConstraintValidator<any>;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let constraintValidationContext: ConstraintValidationContext = undefined as any as ConstraintValidationContext;

    beforeEach(() => {
        negativeConstraintValidator = new NegativeConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
    });

    describe('with a strictly negative constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? false : undefined);
            negativeConstraintValidator.initialize(constraintDescriptor);
        });

        it('considers strictly negative numbers to be valid', () => {
            // given
            let value: number = -123;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly negative numbers to be valid (floating-point)', () => {
            // given
            let value: number = -0.0001;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be invalid', () => {
            // given
            let value: number = 0;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

        it('considers positive numbers to be invalid', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

    describe('with a negative or zero constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? true : undefined);
            negativeConstraintValidator.initialize(constraintDescriptor);
        });

        it('considers strictly negative numbers to be valid', () => {
            // given
            let value: number = -123;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly negative numbers to be valid (floating-point)', () => {
            // given
            let value: number = -0.0001;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be valid', () => {
            // given
            let value: number = 0;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers positive numbers to be invalid', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = negativeConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

});
