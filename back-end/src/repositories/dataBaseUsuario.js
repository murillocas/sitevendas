const error = require("../errorHandling/error");

const users = [
    { username: 'usuario', password: 'senha', role: 'user' },
    { username: 'usuario2', password: 'senha2', role: 'adm' },

];

module.exports = {
    findUser: (username) => {

    const user = users.find(user => user.username === username)

    if(!user){
      throw new Error('');
    }
    return user;
  },
}