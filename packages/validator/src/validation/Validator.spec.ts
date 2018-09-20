import { Validator } from './Validator';
import { ValidatorOptions } from './ValidatorOptions';
import { DateProvider } from './DateProvider';
import { ConstraintValidator } from '../constraints';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Validator', () => {
    let validator: Validator;
    let constraintValidators: Map<string, ConstraintValidator<any>> = new Map<string, ConstraintValidator<any>>();
    let validatorOptions: ValidatorOptions;
    let dateProvider: jest.Mocked<DateProvider>;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        dateProvider = createMockInstance(DateProvider);
        validator = new Validator(constraintValidators, validatorOptions, dateProvider);
    });

    it('todo', () => {

    });

});
