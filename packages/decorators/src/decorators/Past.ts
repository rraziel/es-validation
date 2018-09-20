import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Past decorator, used to define that an element must be a date in the past
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Past: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Past', {
    present: false
});

/**
 * PastOrPresent decorator, used to define that an element must be a date in the past or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const PastOrPresent: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Past', {
    present: true
}, 'PastOrPresent');

export {
    Past,
    PastOrPresent
};
