import {NegativeOrZero} from './negative-or-zero';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@NegativeOrZero decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @NegativeOrZero private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.negativeOrZero).toEqual(true);
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@NegativeOrZero p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].negativeOrZero).toEqual(true);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@NegativeOrZero p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].negativeOrZero).toEqual(true);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @NegativeOrZero method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.negativeOrZero).toEqual(true);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @NegativeOrZero static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @NegativeOrZero cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@NegativeOrZero p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @NegativeOrZero cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @NegativeOrZero private static staticP: number;
                }
            }).toThrowError(/Decorator @NegativeOrZero cannot be applied to static property TestClass\.staticP/);
        });

    });

});
