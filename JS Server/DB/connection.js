const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;
const uri = 'mongodb+srv://Admin-user:Admin1234@capturing.csqjv.mongodb.net/?retryWrites=true&w=majority&appName=Capturing'

let _db;
const connectDB = (callbackFunction) => 
    {
        MongoClient.connect(uri
)
            .then( client => {
                console.log("connected");
                _db = client.db('capturing');
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