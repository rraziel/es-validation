import { AbstractConstraintValidator } from './AbstractConstraintValidator';
import { ConstraintValidationContext, Validator, ValidatorOptions } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';
import { createMockInstance } from 'jest-create-mock-instance';

 // NOTE: required due to jest-date-mock
 declare var global: any;
 global.Date = Object.getPrototypeOf(new Date()).constructor;
 
class AbstractMockedConstraintValidator<T> extends AbstractConstraintValidator<T> {
    isValidValue!: jest.Mock<(testedValue: T) => boolean>;
}

describe('Abstract constraint validator', () => {
    let abstractConstraintValidator: AbstractMockedConstraintValidator<any>;
    let constraintValidationContext: jest.Mocked<ConstraintValidationContext>;
    let validatorOptions: ValidatorOptions;
    let validator: jest.Mocked<Validator>;
    let constraintDescriptor: ConstraintDescriptor;

    beforeEach(() => {
        validatorOptions = new ValidatorOptions();
        validator = createMockInstance(Validator);
        validator.getValidatorOptions.mockReturnValue(validatorOptions);
        constraintValidationContext = createMockInstance(ConstraintValidationContext as any);
        constraintValidationContext.getValidator = jest.fn<() => Validator>();
        constraintValidationContext.getValidator.mockReturnValueOnce(validator);
    });

    describe('automatically validates', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator();
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: any) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('undefined values', () => {
            // given
            let value: any = undefined;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('null values', () => {
            // given
            let value: any = null;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter booleans', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Boolean);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: boolean) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts booleans', () => {
            // given
            let value: boolean = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects numbers', () => {
            // given
            let value: number = 1;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects strings', () => {
            // given
            let value: string = 'true';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter numbers', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Number);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: number) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts numbers', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings by default', () => {
            // given
            let value: string = '123';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('accepts strings when allowed', () => {
            // given
            let value: string = '123';
            validatorOptions.stringAsNumber = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(123, constraintValidationContext);
        });

    });

    describe('can filter strings', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(String);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: string) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts strings', () => {
            // given
            let value: string = '123';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects numbers', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            let value: boolean = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter dates', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Date);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: Date) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts dates', () => {
            // given
            let value: Date = new Date();
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings by default', () => {
            // given
            let value: string = '2018-09-20T07:12:14Z';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('accepts strings when allowed', () => {
            // given
            let value: string = '2018-09-20T07:12:14Z';
            validatorOptions.stringAsDate = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(new Date('2018-09-20T07:12:14Z'), constraintValidationContext);
        });

        it('rejects numbers', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            let value: boolean = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects objects', () => {
            // given
            let value: any = {};
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter objects', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Object);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: object) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts objects', () => {
            // given
            let value: Object = {};
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings', () => {
            // given
            let value: string = '123';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects numbers', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            let value: boolean = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

    describe('can filter arrays', () => {

        beforeEach(() => {
            abstractConstraintValidator = new AbstractMockedConstraintValidator(Array);
            abstractConstraintValidator.isValidValue = jest.fn<(testedValue: Array<any>) => boolean>();
            abstractConstraintValidator.isValidValue.mockReturnValueOnce(true);
            abstractConstraintValidator.initialize(constraintDescriptor);
        });

        it('accepts arrays', () => {
            // given
            let value: Array<number> = [123];
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(true);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
        });

        it('rejects strings', () => {
            // given
            let value: string = '[123]';
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects numbers', () => {
            // given
            let value: number = 123;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

        it('rejects booleans', () => {
            // given
            let value: boolean = true;
            // when
            let result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
            // then
            expect(result).toBe(false);
            expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
        });

    });

});
