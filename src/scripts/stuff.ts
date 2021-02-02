import axios from 'axios';
import { BibleObject } from './interfaces';


export const doStuff = ():void => {
    console.log("reee");
}

export const doMoreStuff = (num: number):number => num + 16;

export const apiCall = async (): Promise<BibleObject> =>{
    const path:string = "https://devotionalium.com/api/v2"
    let result: BibleObject = (await axios.get(path)).data;
    return result
}

