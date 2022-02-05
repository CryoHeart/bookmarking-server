
const bookmarksDao = require("../dao/bookmarks-dao");
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");


//Getting all bookmarks:

async function validateIfExists(bookmark) {
    let isExists = await bookmarksDao.validateIfExists(bookmark);
    console.log("LOGIC IS EXISTS: " + typeof isExists);
    if (isExists == "") {
        return false;
    }
    else {
        throw new Error("Already exists!");
        // throw new ServerError(ErrorType.BOOKMARK_ALREADY_EXISTS, JSON.stringify(bookmark));
    }

}
async function getAllBookmarks() {
    let allBookmarks = await bookmarksDao.getAllBookmarks();
    return allBookmarks;
}
//Remove bookmark:
async function removeBookmark(id) {
    const bookmarkToDelete = await bookmarksDao.removeBookmark(id);
    return bookmarkToDelete;
}

//Add bookmark:

async function addBookmark(newBookmark) {
    try {
        await validateIfExists(newBookmark);
        const successfullySavedBookmark = await bookmarksDao.addBookmark(newBookmark);
        return successfullySavedBookmark;
    }
    catch (e) {
        // console.error(e);
        throw e;
    }
}

//Editing bookmark:

async function editBookmark(editedBookmark) {
    try {
        validateIfExists(editedBookmark);
        await bookmarksDao.editBookmark(editedBookmark);
        return editedBookmark;
    }
    catch (e) {
        // console.error(e);
        throw e;
    }
}

module.exports = {
    getAllBookmarks,
    removeBookmark,
    addBookmark,
    editBookmark,
    validateIfExists
}