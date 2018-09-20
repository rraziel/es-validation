import {
    addConstraint,
    ConstraintDecorator
} from './ConstraintDecorator';
import {
    loadClassDescriptor,
    ClassDescriptor
} from '../descriptors';

const TestDecorator: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'TestDecorator');

function TestDecoratorWithAttributes(value: string): ConstraintDecorator {
    return (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'TestDecorator', {
        value: value
    });
};

const TestDecoratorWithExplicitName: ConstraintDecorator = (target, propertyKey, descriptor) => addConstraint(target, propertyKey, descriptor, 'TestDecorator', undefined, 'TestDecoratorName');

describe('Constraint decorators', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @TestDecorator property?: number;
            }
            // when
            let ClassDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(ClassDescriptor).toBeDefined();
            expect(ClassDescriptor!.getPropertyDescriptor('property')).toBeDefined();
            expect(ClassDescriptor!.getPropertyDescriptor('property')!.getConstraint('TestDecorator')).toBeDefined();
            expect(ClassDescriptor!.getPropertyDescriptor('property')!.getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@TestDecorator p: number) { /* empty */ }
            }
            // when
            let ClassDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(ClassDescriptor).toBeDefined();
            expect(ClassDescriptor!.getConstructorDescriptor()).toBeDefined();
            expect(ClassDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0]).toBeDefined();
            expect(ClassDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getParameterIndex()).toBe(0);
            expect(ClassDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getParameterClass()).toBe(Number);
            expect(ClassDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getConstraint('TestDecorator')).toBeDefined();
            expect(ClassDescriptor!.getConstructorDescriptor()!.getParameterDescriptors()[0].getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@TestDecorator p: number): void { /* empty */ }
            }
            // when
            let ClassDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(ClassDescriptor).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getPropertyKey()).toBe('method');
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getReturnClass()).toBeUndefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0]).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getParameterIndex()).toBe(0);
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getParameterClass()).toBe(Number);
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getConstraint('TestDecorator')).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getParameterDescriptors()[0].getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @TestDecorator method(p: number): number { return p; }
            }
            // when
            let ClassDescriptor: ClassDescriptor<TestClass>|undefined = loadClassDescriptor(TestClass);
            // then
            expect(ClassDescriptor).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getPropertyKey()).toBe('method');
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getReturnClass()).toBe(Number);
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')).toBeDefined();
            expect(ClassDescriptor!.getMethodDescriptor('method')!.getConstraint('TestDecorator')!.getName()).toBe('TestDecorator');
        });

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

    // TODO: with attributes
});
