const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;

let _db;
const connectDB = (callbackFunction) => 
    {
        MongoClient.connect(
'mongodb+srv://srayayoav:<db_password>@capturing.csqjv.mongodb.net/?retryWrites=true&w=majority&appName=Capturing')
            .then( client => {
                console.log("connected");
                _db = client.db('moveoDataBase');
                callbackFunction(client);
            })
            .catch(
                err => {
                    console.log(err);
                    throw err;
                }
            );
    }

const getDB = () => {   
    if(_db)
    {
        return _db;
    }
    throw 'No database found';
} 

exports.connectDB = connectDB;
exports.getDB = getDB;