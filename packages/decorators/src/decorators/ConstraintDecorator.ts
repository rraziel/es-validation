
/**
 * Constraint decorator
 */
type ConstraintDecorator = <T>(target: object|Function, propertyKey: string|symbol, descriptor?: TypedPropertyDescriptor<T>|number) => void;

export {
    ConstraintDecorator
};
