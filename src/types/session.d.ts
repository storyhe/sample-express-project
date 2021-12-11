import session from "express-session";

export = session;

declare module 'express-session' {
    interface SessionData {
        view: number | undefined
    }
}