import {PastOrPresent} from './past-or-present';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@PastOrPresent decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @PastOrPresent private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.pastOrPresent).toEqual(true);
        });

        it.skip('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@PastOrPresent p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].pastOrPresent).toEqual(true);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@PastOrPresent p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].pastOrPresent).toEqual(true);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @PastOrPresent method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.pastOrPresent).toEqual(true);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @PastOrPresent static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @PastOrPresent cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@PastOrPresent p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @PastOrPresent cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @PastOrPresent private static staticP: number;
                }
            }).toThrowError(/Decorator @PastOrPresent cannot be applied to static property TestClass\.staticP/);
        });

    });

});
