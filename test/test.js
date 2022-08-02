const expect = require("chai").expect;
const AppService = require("../src/app.service");

describe("Basic numbers operations\n", function () {
    it("1 + 1 = 2", function () {
        expect(AppService.sumTwoNumbers(1, 1)).to.equal(2);
    });

    it("10 - 6 = 4", function () {
        expect(AppService.minusTwoNumbers(10, 6)).to.equal(4);
    });

    it("2 * 4 = 8", function () {
        expect(AppService.multiplyTwoNumbers(2, 4)).to.equal(8);
    });

    it("8 / 2 = 4", function () {
        expect(AppService.devideTwoNumbers(8, 4)).to.equal(2);
    });
});