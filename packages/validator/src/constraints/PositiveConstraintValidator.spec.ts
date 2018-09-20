import { PositiveConstraintValidator } from './PositiveConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

describe('Positive constraint validator', () => {
    let positiveConstraintValidator: ConstraintValidator<any>;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor> = {} as jest.Mocked<ConstraintDescriptor>;
    let constraintValidationContext: ConstraintValidationContext = undefined as any as ConstraintValidationContext;

    beforeEach(() => {
        positiveConstraintValidator = new PositiveConstraintValidator();
        constraintDescriptor.getAttribute = jest.fn<(constraintName: string) => any>();
    });

    describe('with a strictly positive constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? false : undefined);
            positiveConstraintValidator.initialize(constraintDescriptor);
        });

        it('considers strictly positive numbers to be valid', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly positive numbers to be valid (floating-point)', () => {
            // given
            let value: number = 0.0001;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be invalid', () => {
            // given
            let value: number = 0;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

        it('considers negative numbers to be invalid', () => {
            // given
            let value: number = -123;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

    describe('with a positive or zero constraint', () => {

        beforeEach(() => {
            constraintDescriptor.getAttribute.mockImplementationOnce((attributeName: string) => attributeName === 'zero' ? true : undefined);
            positiveConstraintValidator.initialize(constraintDescriptor);
        });

        it('considers strictly positive numbers to be valid', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers strictly positive numbers to be valid (floating-point)', () => {
            // given
            let value: number = 0.0001;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers zero to be valid', () => {
            // given
            let value: number = 0;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
        });

        it('considers negative numbers to be invalid', () => {
            // given
            let value: number = -123;
            // when
            let result: boolean = positiveConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
        });

    });

});
