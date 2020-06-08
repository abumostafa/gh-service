function routeNotFoundErrorMiddleware(req, res, next) {
  const err = new Error("Page Not Found");
  err.statusCode = 404;

  next(err);
}

function errorMiddleware(err, req, res, next) {
  const message = err.statusCode < 500 ? err.message : "Oops, something went wrong.";

  res.status(err.statusCode || 500);
  res.json({ error: message });
}

module.exports.routeNotFoundErrorMiddleware = routeNotFoundErrorMiddleware;
module.exports.errorMiddleware = errorMiddleware;
