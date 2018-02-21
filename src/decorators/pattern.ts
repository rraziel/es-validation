import {ConstraintDecorator} from './constraint-decorator';
import {getInfoBuilder} from './helper';

/**
 * Create a Pattern decorator, used to define that an element must match a regular expression
 * @param regex Regular expression
 * @return Pattern decorator
 */
function Pattern(regexp: RegExp): ConstraintDecorator {
    return (target, propertyKey, descriptor) => getInfoBuilder('Pattern', target, propertyKey, descriptor).pattern(regexp);
}

export {
    Pattern
};
