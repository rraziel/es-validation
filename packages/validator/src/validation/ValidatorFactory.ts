import { DateProvider } from './DateProvider';
import { Validator } from './Validator';
import { ValidatorOptions } from './ValidatorOptions';
import {
    ConstraintConstraintValidator,
    ConstraintValidatorFactory,
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
    private static readonly DEFAULT_CONSTRAINT_VALIDATORS: {[constraintName: string]: ConstraintValidatorFactory<any>} = {
        'Constraint': constraintProperties => new ConstraintConstraintValidator(constraintProperties),
        'Defined': () => new DefinedConstraintValidator(),
        'Email': () => new EmailConstraintValidator(),
        'False': () => new FalseConstraintValidator(),
        'Future':  constraintProperties => new FutureConstraintValidator(constraintProperties),
        'Max': constraintProperties => new MaxConstraintValidator(constraintProperties),
        'Min': constraintProperties => new MinConstraintValidator(constraintProperties),
        'Negative': constraintProperties => new NegativeConstraintValidator(constraintProperties),
        'NotBlank': () => new NotBlankConstraintValidator(),
        'NotEmpty': () => new NotEmptyConstraintValidator(),
        'NotNull': () => new NotNullConstraintValidator(),
        'Null': () => new NullConstraintValidator(),
        'Past': constraintProperties => new PastConstraintValidator(constraintProperties),
        'Pattern': constraintProperties => new PatternConstraintValidator(constraintProperties),
        'Positive': constraintProperties => new PositiveConstraintValidator(constraintProperties),
        'Size': constraintProperties => new SizeConstraintValidator(constraintProperties),
        'True': () => new TrueConstraintValidator(),
        'Undefined': () => new UndefinedConstraintValidator(),
        'Valid': () => new ValidConstraintValidator()
    };

    private validatorOptions: ValidatorOptions = new ValidatorOptions();
    private dateProvider: DateProvider = new DateProvider();
    private constraintValidatorFactories: Map<string, ConstraintValidatorFactory<any>> = new Map<string, ConstraintValidatorFactory<any>>(
        Object.keys(ValidatorFactory.DEFAULT_CONSTRAINT_VALIDATORS).map(constraintName => [constraintName, ValidatorFactory[constraintName]] as [string, ConstraintValidatorFactory<any>])
    );

    /**
     * Set the constraint validator factories
     * @param constraintValidatorFactories Constraint validator factories
     */
    setConstraintValidatorFactories(constraintValidatorFactories: Map<string, ConstraintValidatorFactory<any>>): this {
        this.constraintValidatorFactories = constraintValidatorFactories;
        return this;
    }

    /**
     * Set a constraint validator factory
     * @param constraintName             Constraint name
     * @param constraintValidatorFactory Constraint validator factory
     */
    setConstraintValidatorFactory(constraintName: string, constraintValidatorFactory: ConstraintValidatorFactory<any>): this {
        this.constraintValidatorFactories.set(constraintName, constraintValidatorFactory);
        return this;
    }

    /**
     * Remove a constraint validator
     * @param constraintName Constraint name
     */
    removeConstraintValidator(constraintName: string): this {
        this.constraintValidatorFactories.delete(constraintName);
        return this;
    }

    /**
     * Set the date provider
     * @param dateProvider Date provider
     */
    setDateProvider(dateProvider: DateProvider): this {
        this.dateProvider = dateProvider;
        return this;
    }

    /**
     * Set the validator options
     * @param validatorOptions Validator options
     */
    setValidatorOptions(validatorOptions: ValidatorOptions): this {
        this.validatorOptions = validatorOptions;
        return this;
    }

    /**
     * Create a validator
     * @return Validator
     */
    createValidator(): Validator {
        return new Validator(this.constraintValidatorFactories, this.validatorOptions, this.dateProvider);
    }

}

export {
    ValidatorFactory
};
