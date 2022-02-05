const { execMap } = require("nodemon/lib/config/defaults");
const usersSchema = require("../models/user.model");


//Register user
async function addUser(newUser) {
    try {
        const addedUser = new usersSchema(newUser);
        await addedUser.save();
        console.log(addedUser);
        return addedUser;
    }
    catch (error) {
        console.log("Username already exists! " + error);
        return error;
    }
}

//Login
async function login(loggedUser) {

    let foundUser = await usersSchema.findOne(loggedUser);
    return foundUser;
}

//Authorize user's action

async function authorizeUser(decodedDetails){
    let authorizedUser = await usersSchema.findOne(decodedDetails);
    return authorizedUser;
}



module.exports = {
    login,
    addUser,
    authorizeUser
}