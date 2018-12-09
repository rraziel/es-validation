import { AbstractDateConstraintValidator } from './AbstractDateConstraintValidator';
import { ConstraintValidationContext, DateProvider, Validator, ValidatorOptions } from '../validation';
import { createMockInstance } from 'jest-create-mock-instance';

 // NOTE: required due to jest-date-mock
 declare var global: any;
 global.Date = Object.getPrototypeOf(new Date()).constructor;

class MockedDateConstraintValidator extends AbstractDateConstraintValidator {
    isValidDate!: jest.Mock<(value: Date, now: Date) => boolean>;
}

describe('Abstract date constraint validator', () => {
    let abstractDateConstraintValidator: MockedDateConstraintValidator;
    let constraintValidationContext: jest.Mocked<ConstraintValidationContext>;
    let validatorOptions: ValidatorOptions;
    let dateProvider: jest.Mocked<DateProvider>;
    let validator: jest.Mocked<Validator>;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        dateProvider = createMockInstance(DateProvider);
        validator = createMockInstance(Validator);
        validator.getDateProvider.mockReturnValue(dateProvider);
        validator.getValidatorOptions.mockReturnValue(validatorOptions);
        constraintValidationContext = createMockInstance(ConstraintValidationContext as any);
        constraintValidationContext.getValidator = jest.fn<() => Validator>();
        constraintValidationContext.getValidator.mockReturnValueOnce(validator);
        abstractDateConstraintValidator = new MockedDateConstraintValidator();
        abstractDateConstraintValidator.isValidDate = jest.fn<(value: Date, now: Date) => boolean>();
        abstractDateConstraintValidator.isValidDate.mockReturnValueOnce(true);
    });

    it('receives a date and the current time', () => {
        // given
        const value: Date = new Date('2018-09-20T07:32:00Z');
        const now: Date = new Date('2018-09-20T07:35:21Z');
        dateProvider.getDate.mockReturnValueOnce(now);
        // when
        const result: boolean = abstractDateConstraintValidator.isValid(value, constraintValidationContext);
        // then
        expect(result).toBe(true);
        expect(abstractDateConstraintValidator.isValidDate).toHaveBeenCalledTimes(1);
        expect(abstractDateConstraintValidator.isValidDate).toHaveBeenCalledWith(value, now);
    });

});
