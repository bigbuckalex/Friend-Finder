let friendsData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", (req, res)=>{
        res.json(friendsData);
    });
    app.post("/api/friends", (req, res)=>{
        let userData = req.body;
        let difference = 0;
        let leastDifferent = 1000;
        let bestFriend = friendsData[0];
        for (let i=0; i<friendsData.length; i++){
            console.log(friendsData[i].name);
            for (let j=0; j<friendsData[i].scores.length; j++){
                difference += Math.abs(friendsData[i].scores[j] - userData.scores[j]);
                console.log(difference);
            }
            if (difference < leastDifferent){
                leastDifferent = difference;
                bestFriend = friendsData[i];
            }
            difference = 0;
            console.log("current best friend: "+bestFriend.name);
        }

        friendsData.push(userData);
        console.log("after push: "+JSON.stringify(friendsData[0]));
        res.json(bestFriend);
    });
}