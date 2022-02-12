//Discord bot to manage EASHL stats
//Made By Moc73
var request = require('request');

var options = {
    url: 'https://www.ea.com/games/nhl/nhl-22/pro-clubs/match-history?clubId=54525&platform=ps4&isLocalized=true'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);