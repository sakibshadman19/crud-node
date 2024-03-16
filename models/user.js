const bcrypt = require('bcryptjs');

let users = [ { id: 1, username: 'admin', password: 'hashed_password' },];
let userIdCounter = 1;

const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: ++userIdCounter,
        username,
        password: hashedPassword
    };
    users.push(newUser);
};

const getAllUsers = () => {
    return users.map(user => ({ id: user.id, username: user.username }));
};

const getUserById = (id) => {
    const user = users.find(u => u.id === id);
    if (user) {
        return { id: user.id, username: user.username };
    }
    return null;
};


const updateUser = async (id, newUsername, newPassword) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return null;
    }

    if (newUsername) {
        users[userIndex].username = newUsername;
    }

    if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        users[userIndex].password = hashedPassword;
    }

    return { id: users[userIndex].id, username: users[userIndex].username };
};


const deleteUserById = (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return null;
    }
    users.splice(userIndex, 1)[0];
    return { success: 'Deleted Successfully' }
};
console.log("consoel",users);
module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUserById };
