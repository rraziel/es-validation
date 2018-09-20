import { ConstraintDescriptor } from './ConstraintDescriptor';

/**
 * Constrained descriptor
 */
interface ConstrainedDescriptor {

    /**
     * Get constraint descriptors
     * @return Constraint descriptors
     */
    getConstraintDescriptors(): ReadonlyArray<ConstraintDescriptor>;

    /**
     * Get constraints by name
     * @param constraintName Constraint name
     * @return Constraint descriptor list
     */
    getConstraints(constraintName: string): ReadonlyArray<ConstraintDescriptor>;

    /**
     * Get a constraint by name, picking the first matching constraint found when a constraint is applied multiple times
     * @param constraintName Constraint name
     * @return Constraint descriptor
     */
    getConstraint(constraintName: string): ConstraintDescriptor|undefined;

}

export {
    ConstrainedDescriptor
};
