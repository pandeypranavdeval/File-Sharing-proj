import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBconnetion from './database/db.js';

const app=express();

app.use(cors());
app.use('/',router);

const PORT=8000;

DBconnetion();

app.get('/',(req,res)=>{
    res.send("server started congrats");
});

app.listen(PORT,()=> console.log(`Server is running on PORT ${PORT}`));