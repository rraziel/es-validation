import {NotBlank} from './not-blank';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@NotBlank decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @NotBlank private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.notBlank).toEqual(true);
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@NotBlank p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].notBlank).toEqual(true);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@NotBlank p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].notBlank).toEqual(true);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @NotBlank method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.notBlank).toEqual(true);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @NotBlank static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @NotBlank cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@NotBlank p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @NotBlank cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @NotBlank private static staticP: number;
                }
            }).toThrowError(/Decorator @NotBlank cannot be applied to static property TestClass\.staticP/);
        });

    });

});
