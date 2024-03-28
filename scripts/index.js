if (localStorage.getItem("clevergo_flashcards") === null) {
    location.href = "/create";
} else {
    location.href = "/study";
}