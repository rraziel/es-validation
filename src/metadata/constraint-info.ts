import {ClassConstructor} from '../utils';

/**
 * Constraint information
 */
interface ConstraintInfo {
    digitsInteger?: number;
    digitsFraction?: number;
    email?: boolean;
    max?: number;
    min?: number;
    notBlank?: boolean;
    notEmpty?: boolean;
    notNull?: boolean;
    null?: boolean;
    pattern?: RegExp;
    sizeMin?: number;
    sizeMax?: number;
    valid?: boolean;
    elementClass?: ClassConstructor<any>;
}

export {
    ConstraintInfo
};
