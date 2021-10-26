import express from "express";
import testTime from "./middlewares/testTime.js";



const app = express();

app.use(testTime);

app.use(express.static("pages"));

const port = 4000;

app.listen(port, (err) => err ? console.log(err) 
            : console.log(`server is running on ${port}`));

