jest.mock("../../../src/lib/request", function () {
  return { request: jest.fn().mockResolvedValue({ items: [] }) };
});

const libRequest = require("../../../src/lib/request");

const { popularRepos } = require("../../../src/service/github");

describe("Github Service", function () {
  afterEach(function () {
    jest.clearAllMocks();
  });

  const baseURL = "https://api.github.com/search/repositories?sort=stars&order=desc&page=1";

  const filtersAndQuery = [
    [undefined, "q=stars:>0"],
    [{ lang: "js" }, "q=language:js"],
    [{ lang: "ts", date: "2020-12-31" }, "q=language:ts+created:>2020-12-31"],
    [{ lang: "ts", date: "2020-12-31", itemsPerPage: 30 }, "per_page=30&q=language:ts+created:>2020-12-31"]
  ];

  it.each(filtersAndQuery)("should check API URL for given filters", async function (params, extraQuery) {
    await popularRepos(params);

    expect(libRequest.request).toBeCalledWith("GET", `${baseURL}${extraQuery ? `&${extraQuery}` : ""}`);
  });
});
