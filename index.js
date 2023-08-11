/* 
    di bawah ini adalah contoh import module dalam NodeJS,
    ini adalah tipe import pertama di mana kita mengimport module
    secara default import
*/
import express from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage!');
});

app.listen(PORT, () => 
    console.log(`Server Running on port: http://localhost:${PORT}`)
);