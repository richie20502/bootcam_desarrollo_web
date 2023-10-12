import express from "express";
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/auth', userRoutes);


app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
