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
    notBlank?: boolean;
    notEmpty?: boolean;
    notNull?: boolean;
    null?: boolean;
    past?: boolean;
    pastOrPresent?: boolean;
    pattern?: RegExp;
    sizeMin?: number;
    sizeMax?: number;
    valid?: boolean;
    elementClass?: ClassConstructor<any>;
}

export {
    ConstraintInfo
};
