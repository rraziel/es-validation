import { ConstrainedDescriptorImpl } from './ConstrainedDescriptorImpl';
import { ConstraintDescriptor } from './ConstraintDescriptor';
import { ConstraintDescriptorImpl } from './ConstraintDescriptorImpl';
import { createMockInstance } from 'jest-create-mock-instance';

describe('Constrained descriptor implementation', () => {
    let constrainedDescriptor: ConstrainedDescriptorImpl;

    beforeEach(() => {
        constrainedDescriptor = new ConstrainedDescriptorImpl();
    });

    it('can return a constraint', () => {
        // given
        let constraintDescriptor: ConstraintDescriptor = new ConstraintDescriptorImpl('test', new Map<string, any>());
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor);
        // when
        let foundConstraintDescriptor: ConstraintDescriptor|undefined = constrainedDescriptor.getConstraint('test');
        // then
        expect(foundConstraintDescriptor).toBeDefined();
    });

    it('can return all constraints', () => {
        // given
        let constraintDescriptor1: ConstraintDescriptor = new ConstraintDescriptorImpl('test1', new Map<string, any>());
        let constraintDescriptor2: ConstraintDescriptor = new ConstraintDescriptorImpl('test2', new Map<string, any>());
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor1);
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor2);
        // when
        let constraints: ReadonlyArray<ConstraintDescriptor> = constrainedDescriptor.getConstraintDescriptors();
        // then
        expect(constraints).toBeDefined();
        expect(constraints.length).toBe(2);
        expect(constraints).toContain(constraintDescriptor1);
        expect(constraints).toContain(constraintDescriptor2);
    });

    it('can return a set of similar constraints', () => {
        // given
        let constraintDescriptor1: ConstraintDescriptor = new ConstraintDescriptorImpl('test1', new Map<string, any>());
        let constraintDescriptor2: ConstraintDescriptor = new ConstraintDescriptorImpl('test2', new Map<string, any>());
        let constraintDescriptor3: ConstraintDescriptor = new ConstraintDescriptorImpl('test1', new Map<string, any>());
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor1);
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor2);
        constrainedDescriptor.addConstraintDescriptor(constraintDescriptor3);
        // when
        let constraints: ReadonlyArray<ConstraintDescriptor> = constrainedDescriptor.getConstraints('test1');
        // then
        expect(constraints).toBeDefined();
        expect(constraints.length).toBe(2);
        expect(constraints).toContain(constraintDescriptor1);
        expect(constraints).toContain(constraintDescriptor3);
    });

});
