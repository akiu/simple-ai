var fs = require("fs");
var obj = JSON.parse(fs.readFileSync(__dirname + '/matcher.json', 'utf8'));

module.exports = function(word) {

    var functions = obj.function;

    var error = function() {
        return "saya tidak faham maksud anda";
    }

    functions.forEach(function(callable) {
        
        var func = require("./" + callable.place)();
        
        var result = func.matchWords(word);

        if(result) {
           console.log(func.answer());
        } else {
            console.log(error());
        }
    });

}



