const usersDao = require("../dao/users-dao")
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config.json");


const saltRight = "sdjjfjewrfkajh";
const saltLeft = "vuelwmfbaqpd";

async function addUser(newUser) {

    console.log("registration reached logic.");
    let newUserData;
    newUser.password = crypto.createHash('md5').update(saltLeft + newUser.password + saltRight).digest('hex');
    newUserData = await usersDao.addUser(newUser);

    return newUserData;
}





async function login(loggedUser) {

    loggedUser.password = crypto.createHash('md5').update(saltLeft + loggedUser.password + saltRight).digest('hex');
    let loggedUserDetails

    loggedUserDetails = await usersDao.login(loggedUser);
    console.log(loggedUserDetails);

    if (loggedUserDetails == null) {
        return console.error("Invalid login data!");
    }

    const token = jwt.sign({
        userId: loggedUserDetails._id,
        username: loggedUserDetails.username
    },
        config.secret);
    const encryptedUserDetails = {
        userId: loggedUserDetails._id,
        username: loggedUserDetails.username,
        token: token
    };

    console.log("User ID: " + encryptedUserDetails.userId + " Username: " + encryptedUserDetails.username + " Token:" + encryptedUserDetails.token);
    return encryptedUserDetails;

}

module.exports = {
    addUser,
    login,
}