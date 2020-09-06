const os = require('os');

// Printing os.userInfo()
try{

    // Settinng options for os.userInfo()
    // method


    // Printing user information
    console.log(os.userInfo().username);
} catch(err){

    // Printing exception if any
    console.log(": error occured" + err);
}