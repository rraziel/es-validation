import { ConstraintProperties } from './ConstraintProperties';

describe('Constraint properties', () => {
    let constraintProperties: ConstraintProperties<any>;

    describe('can detect when they apply to', () => {

        it('a constructor parameter', () => {
            // given
            const target: object|Function = function(): void { /* empty */ };
            const propertyKey: string|symbol|undefined = undefined;
            const descriptor: TypedPropertyDescriptor<any>|number|undefined = undefined;
            // when
            constraintProperties = new ConstraintProperties(target, propertyKey, descriptor, 'test');
            // then
            expect(constraintProperties.appliesToConstructorParameter()).toBe(true);
            expect(constraintProperties.appliesToMethodReturn()).toBe(false);
            expect(constraintProperties.appliesToMethodParameter()).toBe(false);
            expect(constraintProperties.appliesToProperty()).toBe(false);
            expect(constraintProperties.appliesToStaticMember()).toBe(false);
        });

        it('a method return', () => {
            // given
            const target: object|Function = {};
            const propertyKey: string|symbol|undefined = 'testMethod';
            const descriptor: TypedPropertyDescriptor<any>|number|undefined = {};
            // when
            constraintProperties = new ConstraintProperties(target, propertyKey, descriptor, 'test');
            // then
            expect(constraintProperties.appliesToConstructorParameter()).toBe(false);
            expect(constraintProperties.appliesToMethodReturn()).toBe(true);
            expect(constraintProperties.appliesToMethodParameter()).toBe(false);
            expect(constraintProperties.appliesToProperty()).toBe(false);
            expect(constraintProperties.appliesToStaticMember()).toBe(false);
        });

        it('a method parameter', () => {
            // given
            const target: object|Function = {};
            const propertyKey: string|symbol|undefined = 'testMethod';
            const descriptor: TypedPropertyDescriptor<any>|number|undefined = 0;
            // when
            constraintProperties = new ConstraintProperties(target, propertyKey, descriptor, 'test');
            // then
            expect(constraintProperties.appliesToConstructorParameter()).toBe(false);
            expect(constraintProperties.appliesToMethodReturn()).toBe(false);
            expect(constraintProperties.appliesToMethodParameter()).toBe(true);
            expect(constraintProperties.appliesToProperty()).toBe(false);
            expect(constraintProperties.appliesToStaticMember()).toBe(false);
        });

        it('a property', () => {
            // given
            const target: object|Function = {};
            const propertyKey: string|symbol|undefined = 'testProperty';
            const descriptor: TypedPropertyDescriptor<any>|number|undefined = undefined;
            // when
            constraintProperties = new ConstraintProperties(target, propertyKey, descriptor, 'test');
            // then
            expect(constraintProperties.appliesToConstructorParameter()).toBe(false);
            expect(constraintProperties.appliesToMethodReturn()).toBe(false);
            expect(constraintProperties.appliesToMethodParameter()).toBe(false);
            expect(constraintProperties.appliesToProperty()).toBe(true);
            expect(constraintProperties.appliesToStaticMember()).toBe(false);
        });

        it('a static member', () => {
            // given
            const target: object|Function = function(): void { /* empty */ };
            const propertyKey: string|symbol|undefined = 'testProperty';
            const descriptor: TypedPropertyDescriptor<any>|number|undefined = undefined;
            // when
            constraintProperties = new ConstraintProperties(target, propertyKey, descriptor, 'test');
            // then
            expect(constraintProperties.appliesToStaticMember()).toBe(true);
        });

    });

});
