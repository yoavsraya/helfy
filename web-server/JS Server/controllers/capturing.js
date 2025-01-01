const DB = require('../DB/connection')

exports.PUTping = (req, res) => {
    console.log("sensor woke up")
    const instance = DB.getDB();
    //time stamp
    const now = new Date();
    const curr_date = now.toISOString().split('T')[0];
    const curr_time = now.toTimeString().split(' ')[0];

    
    return instance.collection("Documentation")
    .insertOne(
        {
            Date: curr_date,
            Time: curr_time,
            Image: req.body.imageURL,
            detected: req.body.detected
        }
    )
    .then(result => res.status(200));
    
}