import {Pattern} from './pattern';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@Pattern decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @Pattern(/abcd/) private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.pattern).toEqual(/abcd/);
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@Pattern(/abcd/) p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].pattern).toEqual(/abcd/);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@Pattern(/abcd/) p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].pattern).toEqual(/abcd/);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @Pattern(/abcd/) method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.pattern).toEqual(/abcd/);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Pattern(/abcd/) static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Pattern cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@Pattern(/abcd/) p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Pattern cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Pattern(/abcd/) private static staticP: number;
                }
            }).toThrowError(/Decorator @Pattern cannot be applied to static property TestClass\.staticP/);
        });

    });

});
