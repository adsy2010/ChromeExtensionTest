const os = require('os');
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {

        console.log("The color is green.");
        try{

            // Setting options for os.userInfo()
            // method
            var options = {
                encoding: 'buffer'
            };

            // Printing user information
            console.log(os.userInfo(options));
        } catch(err){

            // Printing exception if any
            console.log(": error occured" + err);
        }
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

});