
// Step :1:- create express app and export.

import express from 'express';
import morgan from 'morgan';
import userRouter from './router/userRouter.js'

const app=express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/user", userRouter);


export default app;