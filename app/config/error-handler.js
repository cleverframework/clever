'use strict'

// Http 404 Handler
function http404Handler (req, res) {
  res.status(404)
  const httpError = { error: { status: 404, text: 'Not Found', message: `Cannot ${req.method} ${req.url}` } }
  return res.json(httpError)
}

// HTTP 400 Error Handler
function http400ErrorHandler (err, req, res, next) {
  if (err.code !== 'BAD_REQUEST') return next(err)
  res.status(400)
  const httpError = { error: { status: 400, text: 'Bad Request', message: err.message } }
  return res.json(httpError)
}

// HTTP 401 Error Handler
function http401ErrorHandler (err, req, res, next) {
  if (['UNAUTHORIZED', 'credentials_required'].indexOf(err.code) === -1) return next(err)
  res.status(401)
  const httpError = { error: { status: 401, text: 'Unauthorized', message: err.message } }
  return res.json(httpError)
}

// HTTP 403 Error Handler
function http403ErrorHandler (err, req, res, next) {
  if (['EBADCSRFTOKEN', 'FORBIDDEN'].indexOf(err.code) === -1) return next(err)
  res.status(403)
  const httpError = { error: { status: 403, text: 'Forbidden', message: err.message } }
  return res.json(httpError)
}

// HTTP 404 Error Handler
function http404ErrorHandler (err, req, res, next) {
  if (err.code !== 'NOT_FOUND') return next(err)
  res.status(404)
  const httpError = { error: { status: 404, text: 'Not Found', message: err.message || `Cannot ${req.method} ${req.url}` } }
  return res.json(httpError)
}

// Http 501 Error Handler
function http501ErrorHandler (err, req, res, next) {
  if (err.code !== 'NOT_IMPLEMENTED') return next(err)
  res.status(501)
  const httpError = { error: { status: 501, text: 'Not Implemented', message: err.message } }
  return res.json(httpError)
}

// Http 503 Error Handler
function http503ErrorHandler (err, req, res, next) {
  if (err.code !== 'SERVICE_UNAVAILABLE') return next(err)
  res.status(503)
  const httpError = { error: { status: 503, text: 'Service Unavailable', message: err.message } }
  return res.json(httpError)
}

// Http 500 Error Handler
function http500ErrorHandler (err, req, res, next) {
  res.status(500)
  const httpError = { error: { status: 500, text: 'Internal Server Error', message: err.message } }
  return res.json(httpError)
}

module.exports = [
  http404Handler,
  http400ErrorHandler,
  http401ErrorHandler,
  http403ErrorHandler,
  http404ErrorHandler,
  http501ErrorHandler,
  http503ErrorHandler,
  http500ErrorHandler
]
