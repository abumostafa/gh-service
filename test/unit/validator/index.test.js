const { isValidDate } = require("../../../src/validator");

describe("Validator", function () {
  describe("isValidDate", function () {
    it("Date is valid", function () {
      expect(isValidDate("2010-05-31")).toBeTruthy();
    });

    it.each(["31-12-2020", "31/12/2020", "31.12.2020"])("Date format is invalid", function (input) {
      expect(isValidDate(input)).toBeFalsy();
    });

    it.each(["31-06-2020", "32-07-2020"])("Date value is invalid", function (input) {
      expect(isValidDate(input)).toBeFalsy();
    });
  });
});
