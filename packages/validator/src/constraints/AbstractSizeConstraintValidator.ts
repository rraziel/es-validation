import { AbstractConstraintValidator } from './AbstractConstraintValidator';

type SizeConstraintType = string|Array<any>|Map<any, any>|Set<any>;

/**
 * Abstract size constraint validator
 */
abstract class AbstractSizeConstraintValidator extends AbstractConstraintValidator<SizeConstraintType> {

    /**
     * Class constructor
     */
    constructor() {
        super(String, Array, Map, Set);
    }

    /**
     * Actual value validation implementation
     * @param value   Value to validate
     * @return true if the value passes the constraint
     */
    isValidValue(value: SizeConstraintType): boolean {
        const valueClass: Function = Object.getPrototypeOf(value).constructor;
        let size: number;

        if (valueClass === String) {
            size = (value as any as string).length;
        } else if (valueClass === Array) {
            size = (value as any as Array<any>).length;
        } else if (valueClass === Map) {
            size = (value as any as Map<any, any>).size;
        } else if (valueClass === Set) {
            size = (value as any as Set<any>).size;
        } else {
            throw new Error(`unknown value type ${valueClass}`);
        }

        return this.isValidSize(size);
    }

    /**
     * Test whether the size is valid
     * @param size Size to validate
     * @return true if the size passes the constraint
     */
    protected abstract isValidSize(size: number): boolean;

}

export {
    AbstractSizeConstraintValidator
};
