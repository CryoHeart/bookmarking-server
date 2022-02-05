
const bookmarkSchema = require("../models/bookmark.model");
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");

//Get all bookmarks:

async function getAllBookmarks() {
    let allBookmarks = await bookmarkSchema.find({});
    console.log("Bookmarks sent to client successfully.")
    return allBookmarks;
}

//Remove bookmark:

async function removeBookmark(id) {
    let deletedBookmark = await bookmarkSchema.deleteOne({ _id: id });
    console.log(" Bookmark id: " + id + " successfully deleted.");
    return deletedBookmark;
}


//Add new bookmark:

async function addBookmark(newBookmark) {
    try {
        const savedBookmark = new bookmarkSchema(newBookmark);
        await savedBookmark.save();
        const successfullySavedBookmark = await bookmarkSchema.find(newBookmark);
        console.log("Saved: " + successfullySavedBookmark);
        return successfullySavedBookmark;
    }
    catch (error) {
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(newBookmark), error);;
    }

}


//Edit bookmark:

async function editBookmark(editedBookmark) {
    console.log("editing bookmark id: " + editedBookmark._id);
    let successfullyEdited = bookmarkSchema.findByIdAndUpdate(editedBookmark._id, editedBookmark);
    return successfullyEdited;
}

//Validate if URL exists
async function validateIfExists(bookmark) {
    let isExists = await bookmarkSchema.find({ url: bookmark.url });
    console.log("isExists: " + isExists);
    return isExists;
}

module.exports = {
    getAllBookmarks,
    removeBookmark,
    addBookmark,
    editBookmark,
    validateIfExists
}