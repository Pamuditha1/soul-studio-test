exports.successResponse = (res, { data, code = 200, message }) => {
  return res.status(code).json({
    message: message || "Success",
    data,
  });
};

exports.errorResponse = (res, { error, code = 400, message }) => {
  return res.status(code).json({
    message: message || "Error",
    error,
  });
};
