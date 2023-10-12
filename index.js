import express from "express";
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 3000;

app.use('/', userRoutes);


app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
