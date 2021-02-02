import {NextFunction, Request, Response} from "express";
var express = require('express');
export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req: Request, res: Response, next:NextFunction) {
  res.send('respond with a resource');
});

