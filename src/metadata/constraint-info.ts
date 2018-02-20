import {ClassConstructor} from '../utils';

/**
 * Constraint information
 */
interface ConstraintInfo {
    assertFalse?: boolean;
    assertTrue?: boolean;
    digitsInteger?: number;
    digitsFraction?: number;
    email?: boolean;
    future?: boolean;
    futureOrPresent?: boolean;
    max?: number;
    min?: number;
    negative?: boolean;
    negativeOrZero?: boolean;
    notBlank?: boolean;
    notEmpty?: boolean;
    notNull?: boolean;
    null?: boolean;
    past?: boolean;
    pastOrPresent?: boolean;
    pattern?: RegExp;
    positive?: boolean;
    positiveOrZero?: boolean;
    sizeMin?: number;
    sizeMax?: number;
    valid?: boolean;
    elementClass?: ClassConstructor<any>;
}

export {
    ConstraintInfo
};
