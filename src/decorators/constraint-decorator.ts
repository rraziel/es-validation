
/**
 * Constraint decorator
 */
type ConstraintDecorator = <T>(target: Object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

export {
    ConstraintDecorator
};
