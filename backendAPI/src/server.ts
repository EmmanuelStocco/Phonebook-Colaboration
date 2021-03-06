import "express-async-errors";

import express, { NextFunction, Request, request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./erros/AppErros";
const cors = require('cors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    //console.log("Acessou o Middleware");
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3000, () => console.log('Server started on port 3000'));
