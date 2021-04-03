import * as express from 'express';
import 'reflect-metadata';
import { json } from 'body-parser';
import * as cors from 'cors';
import excelFileGeneratorController from "./controller/excel-file-generatorController";

const app = express()
app.use(cors())
app.use(json())



app.use('/excel/', excelFileGeneratorController)


app.listen(4000, () => {
    console.log("Server is listening in the port 4000")
})



