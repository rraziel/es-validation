import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';

/**
 * Future decorator, used to define that an element must be a date in the future
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const Future: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Future', {
    present: false
});

/**
 * FutureOrPresent decorator, used to define that an element must be a date in the future or the present
 * @param target      Target
 * @param propertyKey Property key
 * @param descriptor  Descriptor
 */
const FutureOrPresent: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'Future', {
    present: true
}, 'FutureOrPresent');

export {
    Future,
    FutureOrPresent
};
