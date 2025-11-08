import { test, expect, describe } from 'vitest';
import { add, subtract, multiply, divide } from '../helpers/math.helper';

type Operations = 'sum' | 'subtract' | 'multiplication' | 'division';
type valuesAndResultType = {
    operation: Operations,
    values: number[],
    result: number
}

const valuesOfTest: Array<valuesAndResultType> = [
    {
        operation: 'sum',
        values: [2, 3],
        result: 5
    },
    {
        operation: 'subtract',
        values: [5, 2],
        result: 3
    },
    {
        operation: 'multiplication',
        values: [2, 3],
        result: 6
    },
    {
        operation: 'division',
        values: [6, 2],
        result: 3
    }
]
// test('test function add', () => {
//     expect(add(2, 3)).toBe(5);
// });

// test('test function subtract', () => {
//     expect(subtract(5, 2)).toBe(3);
// });

// test('test function multiply', () => {
//     expect(multiply(2, 3)).toBe(6);
// });

// test('test function divide', () => {
//     expect(divide(6, 2)).toBe(3);
//     expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
// });

describe('math helper functions', () => {
    //    test summ
    valuesOfTest.forEach(({ operation, values, result }) => {
        const [numberA, numberB] = values;
        test(`test function ${operation}`, () => {
            let res: number;
            switch (operation) {
                case 'sum':
                    res = add(numberA, numberB);
                    break;
                case 'subtract':
                    res = subtract(numberA, numberB);
                    break;
                case 'multiplication':
                    res = multiply(numberA, numberB);
                    break;
                case 'division':
                    res = divide(numberA, numberB);
                    break;
            }
            expect(res).toBe(result);
        });
    });
}); 