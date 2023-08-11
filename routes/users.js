import express from 'express';
/* 
    di bawah ini adalah contoh import module dalam NodeJS,
    ini adalah tipe import kedua di mana kita mengimport module
    secara named import / kita memberikan alias kepada module.

    hal ini dikarenakan module yang kita import memiliki banyak function
    didalamnya.
*/

import { getById, updateById, createUser } from '../controllers/users.js';

const router = express.Router();

// users kita export agar dapat dibaca datanya oleh function yang ada di controllers
export let users = [];

// all routes on files inside 'routes' are already starting with '/[path]'

// di bawah ini adalah contoh route yang memiliki callback function langsung
// Get All
router.get('/', (req, res) => {
    res.send(users);
});

/* 
di bawah ini adalah contoh route yang memisahkan callback function
menjadi function independen
*/
// Delete
const deleteById = (req, res) => {
    const { id } = (req.params);
    
    /* 
        filter di bawah ini untuk memfilter dan menyimpan id yang tidak sesuai
        dengan id yang diminta pada endpoint (/[id]). dan id yang sama dengan endpoint
        akan dihapus.
    */
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} has been deleted`);
};

router.delete('/:id', deleteById);

/*
di bawah ini adalah contoh route yang melakukan import function dari controllers
*/
// Get by ID
router.get('/:id', getById);
// Update
router.patch('/:id', updateById);
// Create
router.post('/', createUser);

export default router;