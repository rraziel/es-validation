import {Size} from './size';
import {getMethodInfo, getPropertyInfo, MethodInfo, PropertyInfo} from '../metadata';

describe('@Size decorator', () => {

    describe('can be applied to', () => {

        it('a property', () => {
            // given
            class TestClass {
                @Size(2,4) private p: number;
            }
            // when
            let propertyInfo: PropertyInfo = getPropertyInfo(TestClass, 'p');
            // then
            expect(propertyInfo).not.toBeUndefined();
            expect(propertyInfo.sizeMin).toEqual(2);
            expect(propertyInfo.sizeMax).toEqual(4);
        });

        it('a constructor parameter', () => {
            // given
            class TestClass {
                constructor(@Size(2,4) p: number) { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass);
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].sizeMin).toEqual(2);
            expect(methodInfo.parameters[0].sizeMax).toEqual(4);
        });

        it('a method parameter', () => {
            // given
            class TestClass {
                method(@Size(2,4) p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.parameters).not.toBeUndefined();
            expect(methodInfo.parameters.length).toEqual(1);
            expect(methodInfo.parameters[0]).not.toBeUndefined();
            expect(methodInfo.parameters[0].sizeMin).toEqual(2);
            expect(methodInfo.parameters[0].sizeMax).toEqual(4);
        });

        it('a method return value', () => {
            // given
            class TestClass {
                @Size(2,4) method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.sizeMin).toEqual(2);
            expect(methodInfo.returnValue.sizeMax).toEqual(4);
        });

        it('supplies default parameters', () => {
            // given
            class TestClass {
                @Size() method(p: number): void { /* empty */ }
            }
            // when
            let methodInfo: MethodInfo = getMethodInfo(TestClass, 'method');
            // then
            expect(methodInfo).not.toBeUndefined();
            expect(methodInfo.returnValue).not.toBeUndefined();
            expect(methodInfo.returnValue.sizeMin).toEqual(0);
            expect(methodInfo.returnValue.sizeMax).toEqual(Number.MAX_SAFE_INTEGER);
        });

    });

    describe('throws an error when applied to', () => {

        it('a static method', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Size(2,4) static staticMethod(p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Size cannot be applied to static method TestClass\.staticMethod/);
        });

        it('a static method parameter', () => {
            // expect
            expect(() => {
                class TestClass {
                    static staticMethod(@Size(2,4) p: number): void { /* empty */ }
                }
            }).toThrowError(/Decorator @Size cannot be applied to static method TestClass\.staticMethod parameter #0/);
        });

        it('a static property', () => {
            // expect
            expect(() => {
                class TestClass {
                    @Size(2,4) private static staticP: number;
                }
            }).toThrowError(/Decorator @Size cannot be applied to static property TestClass\.staticP/);
        });

    });

});
