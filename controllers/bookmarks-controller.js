const { request } = require("express");
const express = require("express");
const bookmarksLogic = require("../logic/bookmarks-logic");
const router = express.Router();


//Pull all bookmarks:

router.get("/", async (request, response, next) => {
    console.log("Request detected. Getting all bookmarks...");
    try {
        let allBookmarks = await bookmarksLogic.getAllBookmarks();
        response.json(allBookmarks);
    }

    catch (error) {
        console.error(error);
        return next(error);
    }

});


//Remove bookmark:

router.delete("/:id", async (request, response, next) => {
    const id = request.params.id;
    console.log("deleting bookmark ID: " + id);
    try {
        const isDeleted = await bookmarksLogic.removeBookmark(id);
        response.json(isDeleted);
    }

    catch (error) {
        console.error(error);
        return next(error);
    }

});

//Add new bookmark:

router.post("/addBookmark", async (request, response, next) => {
    let newBookmark = request.body;
    console.log("Creating new bookmark: ");
    console.log(newBookmark)

    try {

        let successfullySavedBookmark = await bookmarksLogic.addBookmark(newBookmark);
        console.log("The id you need:" + successfullySavedBookmark._id);
        response.json(successfullySavedBookmark);
    }
    catch (e) {
        response.status(500).json(e);
        console.error("RESPONSE THIS: " + e);
    }
})

//Edit bookmark:

router.put("/editBookmark", async (request, response, next) => {
    let editedBookmark = request.body;
    console.log(editedBookmark);

    try {
        let successfullyEdited = await bookmarksLogic.editBookmark(editedBookmark);
        response.json(successfullyEdited);
    }
    catch (e) {
        response.status(500).json(e);
        console.error("RESPONSE THIS: " + e);
    }

})

module.exports = router;