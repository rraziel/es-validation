import { FutureConstraintValidator } from './FutureConstraintValidator';
import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext, DateProvider, Validator, ValidatorOptions } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

 // NOTE: required due to jest-date-mock
 declare var global: any;
 global.Date = Object.getPrototypeOf(new Date()).constructor;

describe('Future constraint validator', () => {
    let constraintValidationContext: jest.Mocked<ConstraintValidationContext>;
    let constraintDescriptor: jest.Mocked<ConstraintDescriptor>;
    let validatorOptions: ValidatorOptions;
    let dateProvider: jest.Mocked<DateProvider>;
    let validator: jest.Mocked<Validator>;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        dateProvider = createMockInstance(DateProvider);
        dateProvider.getDate.mockReturnValueOnce(new Date('2018-09-20T08:28:01Z'));
        validator = createMockInstance(Validator);
        validator.getDateProvider.mockReturnValue(dateProvider);
        validator.getValidatorOptions.mockReturnValue(validatorOptions);
        constraintValidationContext = createMockInstance(ConstraintValidationContext as any);
        constraintValidationContext.getValidator = jest.fn<() => Validator>();
        constraintValidationContext.getValidator.mockReturnValueOnce(validator);
        constraintDescriptor = {} as jest.Mocked<ConstraintDescriptor>;
        constraintDescriptor.getAttribute = jest.fn<(attributeName: string) => any>();
    });

    it('considers a date in the future to be valid', () => {
        // given
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'present') { return false; }
            return undefined;
        });
        const futureConstraintValidator: ConstraintValidator<any> = new FutureConstraintValidator(constraintDescriptor);
        const value: Date = new Date('2018-09-20T08:28:02Z');
        // when
        const result: boolean = futureConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a date in the present to be invalid when present is false', () => {
        // given
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'present') { return false; }
            return undefined;
        });
        const futureConstraintValidator: ConstraintValidator<any> = new FutureConstraintValidator(constraintDescriptor);
        const value: Date = new Date('2018-09-20T08:28:01Z');
        // when
        const result: boolean = futureConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

    it('considers a date in the present to be valid when present is true', () => {
        // given
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'present') { return true; }
            return undefined;
        });
        const futureConstraintValidator: ConstraintValidator<any> = new FutureConstraintValidator(constraintDescriptor);
        const value: Date = new Date('2018-09-20T08:28:01Z');
        // when
        const result: boolean = futureConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
    });

    it('considers a date in the past to be invalid', () => {
        // given
        constraintDescriptor.getAttribute.mockImplementationOnce(attributeName => {
            if (attributeName === 'present') { return false; }
            return undefined;
        });
        const futureConstraintValidator: ConstraintValidator<any> = new FutureConstraintValidator(constraintDescriptor);
        const value: Date = new Date('2018-09-20T08:28:00Z');
        // when
        const result: boolean = futureConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(false);
    });

});
