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