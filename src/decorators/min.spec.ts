import {Min} from './min';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@Min decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @Min(5) private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.min).toEqual(5);
        });

        it.skip('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@Min(5) p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].min).toEqual(5);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@Min(5) p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].min).toEqual(5);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @Min(5) method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.min).toEqual(5);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Min(5) static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Min cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@Min(5) p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Min cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Min(5) private static staticP: number;
                }
            }).toThrowError(/Decorator @Min cannot be applied to static property TestClass\.staticP/);
        });

    });

});
