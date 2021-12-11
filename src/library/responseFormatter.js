const responseFormatter = (req, res, next) => {
  
  res.success = (data = null, message = null) => res.json({
    success: true,
    data,
    message,
  });

  // 아래 { code = null, status = null, message = null } 는 에러 dictionary 로 constant 형식으로 관리하고 있습니다.
  // 예) const NOT_FOUND = { code: NOT_FOUND, status: 404, message: '찾을 수 없습니다' }; res.fail(NOT_FOUND); 
  res.fail = ({ code = null, status = null, message = null }, errorData = null) => {
    if (status) res.status(status);
    else if (res.statusCode < 400 || res.statusCode > 500) res.status(400);

    return res.json({
      success: false,
      error: {
        code,
        data: errorData,
      },
      message,
    });
  };

  next();
};

module.exports = responseFormatter;
