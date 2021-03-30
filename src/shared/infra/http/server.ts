import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import routes from '@shared/infra/http/routes';
import {Request, Response, NextFunction} from 'express';
import AppError from '@shared/errors/AppError';
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from '@shared/infra/swagger/swagger.json';
import '../typeorm';
import '@shared/container';


const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			status: 'error',
			message: err.message,
		});
	};

	console.error(err);

	return response.status(500).json({
		status: 'error',
		message: 'Erro Interno'	
	});
});


app.listen(3000, () => {
	app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    console.log("Olá Sozei :D")
});