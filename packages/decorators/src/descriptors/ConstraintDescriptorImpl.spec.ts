import { ConstraintDescriptorImpl } from './ConstraintDescriptorImpl';
import { ConstraintDescriptor } from './ConstraintDescriptor';

describe('Constraint descriptor implementation', () => {

    it('can return the constraint name', () => {
        // given
        const constraintName: string = 'testName';
        const attributes: Map<string, any> = new Map<string, any>();
        const constraintDescriptor: ConstraintDescriptor = new ConstraintDescriptorImpl(constraintName, attributes);
        // when
        const returnedName: string = constraintDescriptor.getName();
        // then
        expect(returnedName).toBe(constraintName);
    });

    it('can return the attributes', () => {
        // given
        const constraintName: string = 'testName';
        const attributes: Map<string, any> = new Map<string, any>();
        const constraintDescriptor: ConstraintDescriptor = new ConstraintDescriptorImpl(constraintName, attributes);
        // when
        const returnedAttributes: Map<string, any> = constraintDescriptor.getAttributes();
        // then
        expect(returnedAttributes).toBe(attributes);
    });

    it('can return a attribute', () => {
        // given
        const constraintName: string = 'testName';
        const attributes: Map<string, any> = new Map<string, any>([['test-key', 'test-value']]);
        const constraintDescriptor: ConstraintDescriptor = new ConstraintDescriptorImpl(constraintName, attributes);
        // when
        const attributeValue: string = constraintDescriptor.getAttribute('test-key');
        // then
        expect(attributeValue).toBe('test-value');
    });

    describe('throws an exception when', () => {

        it('attempting to retrieve an unknown attribute', () => {
            // given
            const constraintName: string = 'testName';
            const attributes: Map<string, any> = new Map<string, any>();
            const constraintDescriptor: ConstraintDescriptor = new ConstraintDescriptorImpl(constraintName, attributes);
            // expect
            expect(() => constraintDescriptor.getAttribute('test-key')).toThrowError('unknown attribute test-key');
        });

    });

});
