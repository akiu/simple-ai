var fs = require("fs");
var rn = require('random-number');
var path = require("path");

module.exports = function() {
    var answer = JSON.parse(fs.readFileSync(path.join(__dirname , "/../" , "answerWords/salaam.json"), 'utf8'));
    var open = JSON.parse(fs.readFileSync(path.join(__dirname, "/../", 'openingWords/salaam.json'), 'utf8'));

    var matchWords = function(word) {
        var searchResult = open.words.indexOf(word);
        
        if(searchResult !== -1) {
            return true;
        } else {
            return false;
        }
    }

    var jawab = function() {
        var randomNumber = rn({min: 0, max: answer.words.length - 1, integer: true})
        return answer.words[randomNumber];
    }

    return {
        matchWords : matchWords,
        answer : jawab
    }
}