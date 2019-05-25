require('./lib/dbconnect');
const { hash } = require('./lib/bcrypt');
const { UserModel } = require('./models/User.model');
const { PostModel } = require('./models/Post.model');

//admin 5ce945c3de0e822c0114803f
PostModel.create({
    author: '5ce945c3de0e822c0114803f',
    content: 'Post 01 của admin'
})
.then(post=>{
    return UserModel.findOneAndUpdate(
        {_id: '5ce945c3de0e822c0114803f'},
        { 
            $push: {
               posts: post._id
            } 
        },
        { new: true }
    )
})
.then(user=>console.log(user))
.catch(err=>console.log(err.message))

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

