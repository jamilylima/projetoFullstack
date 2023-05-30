import { Response } from "express";


export class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }   
}

export const handleError = (err: any, res: Response) => {
    const { statusCode, message } = err;
    if (err instanceof AppError) {
        return res.status(statusCode).json({
            status: "error",
            statusCode,
            message,
        });
    }
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });

}