const getAllUsers = (req, res) => {
    res.json({
        message: 'GET all users berhasil.',
    });
}

const createNewUser = (req, res) => {
    res.json({
        message: 'CREATE new user berhasil.',
    });
}

module.exports = {
    getAllUsers,
    createNewUser,
}