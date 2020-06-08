const { isValidDate } = require("../validator");
const { request } = require("../lib/request");

const GITHUB_API_HOST = "https://api.github.com";

const mapToRepo = (item) => {
  return {
    name: item.name,
    stars: item.stargazers_count,
    language: item.language,
    created_at: item.created_at,
    url: item.html_url
  };
};

async function popularRepos(params) {
  const { lang, page, itemsPerPage, date } = params || {};

  const query = new URLSearchParams();
  query.set("sort", "stars");
  query.set("order", "desc");
  query.set("page", 1);

  const q = [];

  if (lang && typeof lang === "string") {
    q.push(`language:${lang}`);
  }

  if (date && typeof date === "string" && isValidDate(date)) {
    q.push(`created:>${date}`);
  }

  // q can not be empty
  if (!q.length) {
    q.push("stars:>0");
  }

  if (page && !isNaN(Number(page))) {
    query.set("page", page);
  }

  if (itemsPerPage && !isNaN(Number(itemsPerPage))) {
    query.set("per_page", itemsPerPage);
  }

  // q is special attribute. it might contains (+) and it should not be encoded
  const queryStr = `${query.toString()}&q=${q.map(decodeURIComponent).join("+")}`;
  const url = `${GITHUB_API_HOST}/search/repositories?${queryStr}`;

  const { items } = await request("GET", url);

  return items && items.length ? items.map(mapToRepo) : [];
}

module.exports.popularRepos = popularRepos;
