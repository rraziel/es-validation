import {ConstraintInfo} from './constraint-info';

/**
 * Abstract information builder
 * @param <C> Constraint type
 * @param <T> Information builder type
 */
abstract class AbstractInfoBuilder<C extends ConstraintInfo, T extends AbstractInfoBuilder<C, T>> {

    /**
     * Set whether the element must always be true or false
     * @param booleanAssertion Whether the element must be true or false
     * @return this
     */
    assert(booleanAssertion: boolean): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            if (booleanAssertion) {
                constraintInfo.assertTrue = true;
            } else {
                constraintInfo.assertFalse = true;
            }
        });
    }

    /**
     * Set the range within which the element must be
     * @param integer  Maximum number of intregal digits
     * @param fraction Maximum number of fractional digits
     * @return this
     */
    digits(integer: number, fraction: number): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            constraintInfo.digitsInteger = integer;
            constraintInfo.digitsFraction = fraction;
        });
    }

    /**
     * Set that the element must be a valid email address
     * @return this
     */
    email(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.email = true);
    }

    /**
     * Set that the element must be a date in the future or, optionally, in the present
     * @param orPresent Whether the date may also be the present or not
     * @return this
     */
    future(orPresent?: boolean): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            if (orPresent) {
                constraintInfo.futureOrPresent = true;
            } else {
                constraintInfo.future = true;
            }
        });
    }

    /**
     * Set the maximum value for the element
     * @param maximum Maximum
     * @return this
     */
    maximum(maximum: number): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.max = maximum);
    }

    /**
     * Set the minimum value for the element
     * @param minimum Minimum
     * @return this
     */
    minimum(minimum: number): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.min = minimum);
    }

    /**
     * Set that the element must be a negative number or, optionally, 0
     * @param orZero Whether the number may also be 0 or not
     * @return this
     */
    negative(orZero?: boolean): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            if (orZero) {
                constraintInfo.negativeOrZero = true;
            } else {
                constraintInfo.negative = true;
            }
        });
    }

    /**
     * Set whether the element must not be blank
     * @return this
     */
    notBlank(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.notBlank = true);
    }

    /**
     * Set whether the element must not be empty
     * @return this
     */
    notEmpty(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.notEmpty = true);
    }

    /**
     * Set whether the element must not be null
     * @return this
     */
    notNull(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.notNull = true);
    }

    /**
     * Set whether the element must be null
     * @return this
     */
    null(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.null = true);
    }

    /**
     * Set that the element must be a date in the past or, optionally, in the present
     * @param orPresent Whether the date may also be the present or not
     * @return this
     */
    past(orPresent?: boolean): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            if (orPresent) {
                constraintInfo.pastOrPresent = true;
            } else {
                constraintInfo.past = true;
            }
        });
    }

    /**
     * Set a regular expression pattern for the element
     * @param regexp Regular expression
     */
    pattern(regexp: RegExp): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.pattern = regexp);
    }

    /**
     * Set that the element must be a positive number or, optionally, 0
     * @param orZero Whether the number may also be 0 or not
     * @return this
     */
    positive(orZero?: boolean): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            if (orZero) {
                constraintInfo.positiveOrZero = true;
            } else {
                constraintInfo.positive = true;
            }
        });
    }

    /**
     * Set the element's minimum and maximum size
     * @param minimum Minimum size
     * @param maximum Maximum size
     * @return this
     */
    size(minimum: number, maximum: number): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => {
            constraintInfo.sizeMin = minimum;
            constraintInfo.sizeMax = maximum;
        });
    }

    /**
     * Set that the element's fields must be validated
     * @return this
     */
    valid(): AbstractInfoBuilder<C, T> {
        return this.update(constraintInfo => constraintInfo.valid = true);
    }

    /**
     * Get the constraint information
     * @return Constraint information
     */
    protected abstract getConstraintInfo(): C;

    /**
     * Set the constraint information
     * @param constraintInfo Constraint information
     */
    protected abstract setConstraintInfo(constraintInfo: C): void;

    /**
     * Update constraint information
     * @param callback Callback receiving the constraint information to update
     * @return this
     */
    private update(callback: (constraintInfo: C) => void): AbstractInfoBuilder<C, T> {
        let constraintInfo: C = this.getConstraintInfo();
        callback(constraintInfo);
        this.setConstraintInfo(constraintInfo);
        return this;
    }

}

export {
    AbstractInfoBuilder
};
