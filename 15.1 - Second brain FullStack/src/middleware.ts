import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config'

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token as string, JWT_SECRET)

    if(!token) {
        res.json({msg: `not valid input token: ${token}`})
    }

    //@ts-ignore
    req.userId = decoded.id;
    next();
}