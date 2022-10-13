import express from 'express';
import morgan from 'morgan';
const app = express();

const age:number = 12;
const s:string = "fsdf"
const myList: Array<any> = [1,2,3,"sdfsd",true]


app.get("/", (req,res) => {
  res.send("Hello bitch!")
})

app.use(morgan("dev"))

app.listen(5000, () => {
  console.log(`Express Server Is Running With TS.`);
});