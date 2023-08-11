import { v4 as uuidv4 } from 'uuid';
import { users } from "../routes/users.js";

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ id: uuidv4(), ...user });

    res.send(`User with the name ${user.firstName} added to the database.`);
};

export const getById = (req, res) => {
    const { id } = (req.params);

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
};

export const updateById = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id == id);

    // complex if-statement
    if(firstName) {
        user.firstName = firstName;
    }
    // single line if-statement
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the ${id} has been updated.`);
};