require('./lib/dbconnect');
const { hash } = require('./lib/bcrypt');
const { UserModel } = require('./models/User.model');
//4.2

//4.1
// hash('111111')
// .then(hash=> UserModel.insertMany([
//     {
//         email: 'admin02@gmail.com',
//         password: hash,
//         name: 'Nguyen Admin 02'
//     },
//     {
//         email: 'guest@gmail.com',
//         password: hash,
//         name: 'Nguyen guest'
//     },
//     {
//         email: 'manager@gmail.com',
//         password: hash,
//         name: 'Manager'
//     }
// ]))
// .then(users=>console.log(users))
// .catch(err=>console.log(err.message))

