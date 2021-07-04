const { User } = require('../models')

module.exports = {
    getAllUsers() {
        return User.findAll()
    },
   
    getUsers(offset = 0, limit = 5) {
        return User.findAndCountAll({
            where: {},
            limit:limit,
            offset:offset
          })
     },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getUser(id) { 
        return User.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}