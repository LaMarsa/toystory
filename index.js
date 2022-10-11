


function toyStory(){

    const toysArray = [
      "Woody",
      "Dool",
      "Monkey"
    ];

    var randomNr = Math.floor(Math.random() * myArray.length);
    var toys = toysArray[randomNr];

    return toys;

}


module.exports = toyStory;
// or module.exports.toyStory = toyStory;    ??
