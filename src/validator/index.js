function isValidDate(input) {
  return input && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(input) && new Date(input).toString() !== "Invalid Date";
}

module.exports.isValidDate = isValidDate;
