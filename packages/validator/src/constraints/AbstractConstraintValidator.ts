import { ConstraintValidator } from './ConstraintValidator';
import { ConstraintValidationContext, ValidatorOptions } from '../validation';
import { ConstraintDescriptor } from '@es-validation/decorators';

/**
 * Abstract constraint validator
 * @param <T> Value type
 */
abstract class AbstractConstraintValidator<T> extends ConstraintValidator<T> {
    private readonly allowedTypes: Array<Function>;

    /**
     * Class constructor
     * @param allowedTypes Allowed types
     */
    constructor(...allowedTypes: Array<Function>) {
        super();
        this.allowedTypes = allowedTypes;
    }

    /**
     * Initialize the validator in preparation for isValid calls
     * @param constraintDescriptor Constraint descriptor
     */
    initialize(constraintDescriptor: ConstraintDescriptor): void {
        // Nothing to do
    }

    /**
     * Test whether the value is valid
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    isValid(value: T, context: ConstraintValidationContext): boolean {
        if (value === undefined || value === null) {
            return true;
        }

        let testedValue: any = this.convertValueIfNecessary(value, context);
        if (testedValue === undefined) {
            return false;
        }

        return this.isValidValue(testedValue, context);
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @param context Constraint validation context
     * @return true if the value passes the constraint
     */
    protected abstract isValidValue(value: T, context: ConstraintValidationContext): boolean;

    /**
     * Convert the value to another type if necessary/possible
     * @param value   Value
     * @param context Constraint validation context
     * @return Converted value
     */
    private convertValueIfNecessary(value: T, context: ConstraintValidationContext): any {
        if (!this.allowedTypes) {
            return value;
        }

        let typeClass: Function = Object.getPrototypeOf(value).constructor;

        if (this.allowedTypes.indexOf(typeClass) !== -1) {
            return value;
        }

        if (typeClass === String) {
            let stringValue: string = value as any as string;
            return this.convertStringValueIfNecessary(stringValue, context);
        }

        return undefined;
    }

    /**
     * Convert the string value to another type if necessary/possible
     * @param value   Value
     * @param context Constraint validation context
     * @return Converted value
     */
    private convertStringValueIfNecessary(value: string, context: ConstraintValidationContext): any {
        let validatorOptions: ValidatorOptions = context.getValidator().getValidatorOptions();
        let stringValue: string = value as any as string;

        if (validatorOptions.stringAsNumber && this.allowedTypes.indexOf(Number) !== -1) {
            return this.convertStringToNumber(stringValue);
        }

        if (validatorOptions.stringAsDate && this.allowedTypes.indexOf(Date) !== -1) {
            return this.convertStringToDate(stringValue);
        }

        return undefined;
    }

    /**
     * Convert a string to a number
     * @param value String value
     * @return Number value
     */
    private convertStringToNumber(value: string): number|undefined {
        let numberValue: number = parseInt(value, 10);
        if (!isNaN(numberValue)) {
            return numberValue;
        }

        return undefined;
    }

    /**
     * Convert a string to a date
     * @param value String value
     * @return Date value
     */
    private convertStringToDate(value: string): Date|undefined {
        let dateValue: Date = new Date(value);
        if (!isNaN(dateValue.getTime())) {
            return dateValue;
        }

        return undefined;
    }

}

export {
    AbstractConstraintValidator
};
