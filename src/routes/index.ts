import {NextFunction, Request, Response} from "express";
import { BibleObject } from "../scripts/interfaces";
import { apiCall } from "../scripts/stuff";
var express = require('express');
export const indexRouter = express.Router();

const getIndexFunc = async (req: Request, res: Response, next:NextFunction) => {
  let bible:BibleObject = await apiCall();
  // FOR SOME REASON THE API RETURNS THE OBJECT WITH THOSE NAMES AND NOT IN ARRAY. pls do not blame me for this, i know i could work a bit and make it better but this is just a POC
  let result: String = `
    data: ${bible.date}<br/><br/>
    1. book: ${bible[0].book||'unknown'}<br/>
    quote in orginal languge: ${bible[0].textOriginal}<br/>
    quote in english: ${bible[0].text}<br/><br/>
    2. book: ${bible[1].book||'unknown'}<br/>
    quote in orginal languge: ${bible[1].textOriginal}<br/>
    quote in english: ${bible[1].text}<br/><br/>
    3. book: ${bible[2].book||'unknown'}<br/>
    quote in orginal languge: ${bible[2].textOriginal}<br/>
    quote in english: ${bible[2].text}<br/>`

  res.send(result);
}
/* GET home page. */
indexRouter.get('/',getIndexFunc);

