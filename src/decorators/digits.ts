import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Digits decorator, used to define that an element must be a number within the accepted range
 * @param integer  Maximum number of integral digits
 * @param fraction Maximum number of fractional digits
 * @return Digits decorator
 */
function Digits(integer: number, fraction: number): ValidationDecorator {
    return (target, propertyKey, descriptor) => withInfoBuilder('Digits', target, propertyKey, descriptor, infoBuilder => infoBuilder.digits(integer, fraction));
}

export {
    Digits
};
