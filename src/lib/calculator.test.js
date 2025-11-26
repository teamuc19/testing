import { multiplier, adder, subtracter, divider } from "./calculator";
import { expect, test } from "vitest";
 
test('Multiplier Test', () => {
    let result = multiplier(3, 4);
    expect(result).toEqual(12);
});
 
test('Addition Test', () => {
    let result = adder(3, 4);
    expect(result).toEqual(7);
});
 
test('Subtraction Test', () => {
    let result = subtracter(10, 4);
    expect(result).toEqual(6);
});
 
test('Division Test', () => {
    let result = divider(20, 4);
    expect(result).toEqual(5);
});