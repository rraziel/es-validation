import {AssertFalse} from './assert-false';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@AssertFalse decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @AssertFalse private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.assertFalse).toEqual(true);
        });

        it.skip('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@AssertFalse p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].assertFalse).toEqual(true);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@AssertFalse p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].assertFalse).toEqual(true);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @AssertFalse method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.assertFalse).toEqual(true);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @AssertFalse static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @AssertFalse cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@AssertFalse p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @AssertFalse cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @AssertFalse private static staticP: number;
                }
            }).toThrowError(/Decorator @AssertFalse cannot be applied to static property TestClass\.staticP/);
        });

    });

});
