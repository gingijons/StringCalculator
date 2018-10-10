const add = require("./StringCalculator");

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return the sum of the numbers in the string", () => {
    expect(add("3,4")).toBe(7);
});

it("should return zero on empty string", () => {
    expect(add("")).toBe(0);
});

it("should return sum of all numbers in the string", () => {
    expect(add("1,2,3,4,6")).toBe(16);
});

it("should return sum of all numbers in the string", () => {
    expect(add("1,2n3 4n5")).toBe(15);
});

it("should throw an exception", () => {
    expect(() => {
        add("-2,2,-1 -77 -7");
    }).toThrow();
});

it("should omit all numbers greater than 1000", () => {
    expect(add("1,2n3 4n5,1003,1000")).toBe(1015);
});