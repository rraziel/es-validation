import { Validator } from './Validator';
import { ValidatorOptions } from './ValidatorOptions';
import { DateProvider } from './DateProvider';
import { ConstraintValidatorFactory } from '../constraints';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Validator', () => {
    const constraintValidators: Map<string, ConstraintValidatorFactory<any>> = new Map<string, ConstraintValidatorFactory<any>>();
    let validator: Validator;
    let validatorOptions: ValidatorOptions;
    let dateProvider: jest.Mocked<DateProvider>;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        dateProvider = createMockInstance(DateProvider);
        validator = new Validator(constraintValidators, validatorOptions, dateProvider);
    });

    it.skip('todo', () => {
        // TODO
    });

});
