import { ConstrainedDescriptor } from './ConstrainedDescriptor';
import { ConstraintDescriptor } from './ConstraintDescriptor';

/**
 * Constrained descriptor implementation
 */
class ConstrainedDescriptorImpl implements ConstrainedDescriptor {
    private readonly constraintDescriptors: Array<ConstraintDescriptor> = [];

    /**
     * Get constraint descriptors
     * @return Constraint descriptors
     */
    getConstraintDescriptors(): ReadonlyArray<ConstraintDescriptor> {
        return this.constraintDescriptors;
    }

    /**
     * Add a constraint descriptor
     * @param constraintDescriptor Constraint descriptor
     */
    addConstraintDescriptor(constraintDescriptor: ConstraintDescriptor): void {
        this.constraintDescriptors.push(constraintDescriptor);
    }

    /**
     * Get constraints by name
     * @param constraintName Constraint name
     * @return Constraint descriptor list
     */
    getConstraints(constraintName: string): ReadonlyArray<ConstraintDescriptor> {
        return this.constraintDescriptors.filter(constraintDescriptor => constraintDescriptor.getName() === constraintName);
    }

    /**
     * Get a constraint by name, picking the first matching constraint found when a constraint is applied multiple times
     * @param constraintName Constraint name
     * @return Constraint descriptor
     */
    getConstraint(constraintName: string): ConstraintDescriptor|undefined {
        return this.constraintDescriptors.find(constraintDescriptor => constraintDescriptor.getName() === constraintName);
    }

}

export {
    ConstrainedDescriptorImpl
};
