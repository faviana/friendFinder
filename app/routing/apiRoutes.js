//Loads data
var friendsData = require("../data/friends.js");

// Routing
//--------------------------------------------------------------------------------------------------
module.exports = function(app) {
    //API GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

//API POST request
app.post("/api/friends", function(req, res) {

var inputArray = [];
var matchScore = 0;


for (var i = 0; i < friendsData.length; i++) {
       var difference = 0;

            for (var k = 0; k < req.body.scores.length; k++) {
                difference += (Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(req.body.scores[k])));
            }

            inputArray.push(difference);
        
}

 //find the best match from the array
  for(var i=0; i<inputArray.length; i++){
    if(inputArray[i] <= inputArray[matchScore]){
      matchScore = i;
    }
  }

  //return the data from the best match
  res.json(friendList[matchScore]);

  //push to friendsData array
  friendsData.push(req.body);

});
};



