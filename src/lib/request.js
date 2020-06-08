// eslint-disable-next-line node/no-extraneous-require
const fetch = require("node-fetch");
const _merge = require("lodash/merge");
const AbortController = require("abort-controller");

async function request(method, url, options) {
  const abortController = new AbortController();

  const defaultOptions = {
    method,
    timeout: 3000,
    signal: abortController.signal
  };

  const { timeout, ...restOptions } = _merge(defaultOptions, options);

  const timeoutHandler = setTimeout(() => abortController.abort(), Number(timeout));

  const response = await fetch(url, restOptions);
  clearTimeout(timeoutHandler);

  if (response.status >= 400) {
    const content = await response.text();
    throw new Error(`Request failed with status code ${response.status} (body: ${content})`);
  }

  return response.json();
}

module.exports.request = request;
