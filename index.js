require('./lib/dbconnect');
const { UserModel } = require('./models/User.model');

//4.1
UserModel.insertMany([
    {
        email: 'admin@gmail.com',
        password: '123456' //
    }
])