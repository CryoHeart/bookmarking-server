let ErrorType = {

    GENERAL_ERROR: {
        id: 1,
        httpCode: 600,
        message: "General Error",
        isShowStackTrace: true
    },
    BOOKMARK_ALREADY_EXISTS: {
        id: 2,
        httpCode: 601,
        message: "Bookmark already exists!",
        isShowStackTrace: false
    }

}

module.exports = ErrorType;