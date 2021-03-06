const User = require('../models/users');

async function addUser (req, res) {
    const addUser = await User.add(req.body);
    console.log(addUser);
    res.json(`The added user was given the id ${addUser}`);
}

async function deleteUser (req, res) {
    const { id } = req.params;
    await User.delete(id);
    console.log(`user with id: ${id} was deleted`);
}
async function retrieveOne(req, res) {
    const theUser = await User.getById(req.params.id);
    res.render('users', {
        locals: {
            oneUser: theUser
        }
    });
}

async function retrieveAllUsers (req, res) {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.json(allUsers);
}

function updateUser (req, res) {
    res.json({message: "user has been updates"});
}

module.exports = {
    addUser,
    deleteUser,
    retrieveOne,
    retrieveAllUsers,
    updateUser

};