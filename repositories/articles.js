const { Article } = require('../models')



module.exports = {
    getAllArticles() {
        return Article.findAll()
    },
   
    getArticles(offset=0,limit=5) {
 
        return Article.findAndCountAll({
            where: {},
            limit:limit,
            offset:offset
          })
     },
     
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getArticle(id) { 
        return Article.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}