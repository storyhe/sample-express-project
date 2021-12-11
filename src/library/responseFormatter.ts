import { FailedPayload } from "../types/response";

const responseFormatter = (req, res, next) => {
  
  res.success = (data: object | undefined, message: string | undefined) => res.json({
    success: true,
    data,
    message,
  });

  res.failed = (payload: FailedPayload, errorData: null) => {
    if (payload.code) res.status(payload.code);
    else if (res.statusCode < 400 || res.statusCode > 500) res.status(400);

    return res.json({
      success: false,
      error: {
        data: errorData,
      },
      message: payload.message
    });
  };

  next();
};

export default responseFormatter
