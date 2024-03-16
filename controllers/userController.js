const UserModel = require('../models/user');

const createUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        await UserModel.createUser(username, password);
        res.status(201).json({success: 'New User created'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllUsers = (req, res) => {
    const users = UserModel.getAllUsers();
    res.status(200).json(users);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = UserModel.getUserById(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
};

const updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).json({ error: 'Username or password is required' });
    }

    try {
        const updatedUser = await UserModel.updateUser(userId, username, password);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const deleteUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const deletedUser = UserModel.deleteUserById(userId);
    if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(deletedUser);
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUserById };
