let friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", (req, res)=>{
        res.json(friendsData);
    });
    app.post("/api/friends", (req, res)=>{
        //todo: add compatibility logic
        friendsData.push(req.body);
    });
}