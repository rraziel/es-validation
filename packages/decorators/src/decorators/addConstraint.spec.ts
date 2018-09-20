import { addConstraint } from './addConstraint';
import { ConstraintDecorator } from './ConstraintDecorator';
import { ConstraintProperties } from './ConstraintProperties';
import {
    loadClassDescriptor,
    ClassDescriptor
} from '../descriptors';

const TestDecorator: ConstraintDecorator = <T>(target, propertyKey, descriptor) => addConstraint(new ConstraintProperties<T>(target, propertyKey, descriptor, 'TestDecorator'));

const TestDecoratorWithExplicitName: ConstraintDecorator = <T>(target, propertyKey, descriptor) => {
    let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'TestDecorator');
    constraintProperties.decoratorName = 'TestDecoratorName';
    addConstraint(constraintProperties);
};

describe('Constraint decorators', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @TestDecorator property?: number;
            }
            // when
            let classDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(classDescriptor).toBeDefined();
            expect(classDescriptor!.getPropertyDescriptor('property')).toBeDefined();
            expect(classDescriptor!.getPropertyDescriptor('property')!.getPropertyClass()).toBe(Number);
            expect(classDescriptor!.getPropertyDescriptor('property')!.getPropertyKey()).toBe('property');
            expect(classDescriptor!.getPropertyDescriptor('property')!.getConstraint('TestDecorator')).toBeDefined();
            expect(classDescriptor!.getPropertyDescriptor('property')!.getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@TestDecorator p: number) { /* empty */ }
            }
            // when
            let classDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(classDescriptor).toBeDefined();
            expect(classDescriptor!.getConstructorDescriptor()).toBeDefined();
            expect(classDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0]).toBeDefined();
            expect(classDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getParameterIndex()).toBe(0);
            expect(classDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getParameterClass()).toBe(Number);
            expect(classDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getConstraint('TestDecorator')).toBeDefined();
            expect(classDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@TestDecorator p: number): void { /* empty */ }
            }
            // when
            let classDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(classDescriptor).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getPropertyKey()).toBe('method');
            expect(classDescriptor!.getMethodDescriptor('method')!.getReturnClass()).toBeUndefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0]).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getParameterIndex()).toBe(0);
            expect(classDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getParameterClass()).toBe(Number);
            expect(classDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getConstraint('TestDecorator')).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @TestDecorator method(p: number): number { return p; }
            }
            // when
            let classDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(classDescriptor).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getPropertyKey()).toBe('method');
            expect(classDescriptor!.getMethodDescriptor('method')!.getReturnClass()).toBe(Number);
            expect(classDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')).toBeDefined();
            expect(classDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

    });

    it('can have attributes', () => {
        // given
        function TestDecoratorWithAttributes(value: string): ConstraintDecorator {
            return <T>(target, propertyKey, descriptor) => {
                let constraintProperties: ConstraintProperties<T> = new ConstraintProperties<T>(target, propertyKey, descriptor, 'TestDecorator');
                constraintProperties.attributes = {value};
                addConstraint(constraintProperties);
            };
        }
        class TestClass {
            @TestDecoratorWithAttributes('test') method(p: number): number { return p; }
        }
        // when
        let classDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
        // then
        expect(classDescriptor).toBeDefined();
        expect(classDescriptor!.getMethodDescriptor('method')).toBeDefined();
        expect(classDescriptor!.getMethodDescriptor('method')!.getPropertyKey()).toBe('method');
        expect(classDescriptor!.getMethodDescriptor('method')!.getReturnClass()).toBe(Number);
        expect(classDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')).toBeDefined();
        expect(classDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')!.getAttributes()).toBeDefined();
        expect(classDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')!.getAttribute('value')).toBe('test');
    });

    describe('throw an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @TestDecorator static staticMethod(): void { /* empty */ }
                }
            }).toThrowError('Decorator @TestDecorator cannot be applied to static method TestClass.staticMethod');
        });

        it('a static method (explicit name)', () => {
            // expect
            expect(() => {
                class TestClass {
                    @TestDecoratorWithExplicitName static staticMethod(): void { /* empty */ }
                }
            }).toThrowError('Decorator @TestDecoratorName cannot be applied to static method TestClass.staticMethod');
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@TestDecorator parameter: number): void { /* empty */ }
                }
            }).toThrowError('Decorator @TestDecorator cannot be applied to static method TestClass.staticMethod parameter #0');
        });

        it('a static method parameter (explicit name)', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@TestDecoratorWithExplicitName parameter: number): void { /* empty */ }
                }
            }).toThrowError('Decorator @TestDecoratorName cannot be applied to static method TestClass.staticMethod parameter #0');
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @TestDecorator static staticProperty?: number;
                }
            }).toThrowError('Decorator @TestDecorator cannot be applied to static property TestClass.staticProperty');
        });

        it('a static property (explicit name)', () => {
            // expect
            expect(() => {
                class TestClass {
                    @TestDecoratorWithExplicitName static staticProperty?: number;
                }
            }).toThrowError('Decorator @TestDecoratorName cannot be applied to static property TestClass.staticProperty');
        });

    });

});
