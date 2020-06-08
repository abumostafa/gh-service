const { errorMiddleware } = require("../../../src/middleware");

describe("Middleware", function () {
  describe("errorMiddleware", function () {
    it("should set statusCode to 500 and return Oops", function () {
      const err = new Error("Random error");
      const res = { status: jest.fn(), json: jest.fn() };

      errorMiddleware(err, {}, res, () => undefined);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Oops, something went wrong." });
    });
  });
});
