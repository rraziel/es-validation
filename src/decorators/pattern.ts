import {withInfoBuilder, ValidationDecorator} from './helper';

/**
 * Create a Pattern decorator, used to define that an element must match a regular expression
 * @param regex Regular expression
 * @return Pattern decorator
 */
function Pattern(regexp: RegExp): ValidationDecorator {
    return (target, propertyKey, descriptor) => withInfoBuilder(target, propertyKey, descriptor, infoBuilder => infoBuilder.pattern(regexp));
}

export {
    Pattern
};
