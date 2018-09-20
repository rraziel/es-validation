import { DateProvider } from './DateProvider';
import { Validator } from './Validator';
import { ValidatorOptions } from './ValidatorOptions';
import {
    ConstraintConstraintValidator,
    ConstraintValidator,
    DefinedConstraintValidator,
    EmailConstraintValidator,
    FalseConstraintValidator,
    FutureConstraintValidator,
    MaxConstraintValidator,
    MinConstraintValidator,
    NegativeConstraintValidator,
    NotBlankConstraintValidator,
    NotEmptyConstraintValidator,
    NotNullConstraintValidator,
    NullConstraintValidator,
    PastConstraintValidator,
    PatternConstraintValidator,
    PositiveConstraintValidator,
    SizeConstraintValidator,
    TrueConstraintValidator,
    UndefinedConstraintValidator,
    ValidConstraintValidator
} from '../constraints';

/**
 * Validator factory
 */
class ValidatorFactory {
    private static readonly DEFAULT_CONSTRAINT_VALIDATORS: Map<string, ConstraintValidator<any>> = new Map<string, ConstraintValidator<any>>([
        ['Constraint', new ConstraintConstraintValidator()],
        ['Defined', new DefinedConstraintValidator()],
        ['Email', new EmailConstraintValidator()],
        ['False', new FalseConstraintValidator()],
        ['Future', new FutureConstraintValidator()],
        ['Max', new MaxConstraintValidator()],
        ['Min', new MinConstraintValidator()],
        ['Negative', new NegativeConstraintValidator()],
        ['NotBlank', new NotBlankConstraintValidator()],
        ['NotEmpty', new NotEmptyConstraintValidator()],
        ['NotNull', new NotNullConstraintValidator()],
        ['Null', new NullConstraintValidator()],
        ['Past', new PastConstraintValidator()],
        ['Pattern', new PatternConstraintValidator()],
        ['Positive', new PositiveConstraintValidator()],
        ['Size', new SizeConstraintValidator()],
        ['True', new TrueConstraintValidator()],
        ['Undefined', new UndefinedConstraintValidator()],
        ['Valid', new ValidConstraintValidator()],
    ]);

    private constraintValidators: Map<string, ConstraintValidator<any>> = new Map<string, ConstraintValidator<any>>(ValidatorFactory.DEFAULT_CONSTRAINT_VALIDATORS);
    private validatorOptions: ValidatorOptions = new ValidatorOptions();
    private dateProvider: DateProvider = new DateProvider();

    /**
     * Set the constraint validators
     * @param constraintValidators Constraint validators
     */
    setConstraintValidators(constraintValidators: Map<string, ConstraintValidator<any>>): void {
        this.constraintValidators = constraintValidators;
    }

    /**
     * Set a constraint validator
     * @param constraintName      Constraint name
     * @param constraintValidator Constraint validator
     */
    setConstraintValidator(constraintName: string, constraintValidator: ConstraintValidator<any>): ValidatorFactory {
        this.constraintValidators.set(constraintName, constraintValidator);
        return this;
    }

    /**
     * Remove a constraint validator
     * @param constraintName Constraint name
     */
    removeConstraintValidator(constraintName: string): ValidatorFactory {
        this.constraintValidators.delete(constraintName);
        return this;
    }

    /**
     * Set the date provider
     * @param dateProvider Date provider
     */
    setDateProvider(dateProvider: DateProvider): void {
        this.dateProvider = dateProvider;
    }

    /**
     * Set the validator options
     * @param validatorOptions Validator options
     */
    setValidatorOptions(validatorOptions: ValidatorOptions): void {
        this.validatorOptions = validatorOptions;
    }

    /**
     * Create a validator
     * @return Validator
     */
    createValidator(): Validator {
        return new Validator(this.constraintValidators, this.validatorOptions, this.dateProvider);
    }

}

export {
    ValidatorFactory
};
