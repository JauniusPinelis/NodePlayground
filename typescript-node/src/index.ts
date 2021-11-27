import express, {Request, Response, Application} from 'express';

function sum (num1:number, num2:number ){
    return num1 + num2;
}

const app:Application = express();

const PORT = process.env.port || 8000;

app.get("/", (req:Request,res:Response) => {
    res.send("Hello Typescript with Node.js")
})

app.listen(PORT, ():void => {
    console.log(`Server is running in port ${PORT}`);
});