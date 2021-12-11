import { Request, Response, NextFunction } from "express"

type FailedPayload = {
    code: number | undefined
    status: number | undefined
    message: string | undefined
}


declare module 'express-serve-static-core' {
    interface Response {
        success: (data: object | undefined, message: string | undefined) => Response
        failed: (payload: FailedPayload, errorData: undefined) => Response
    }
}
