if (localStorage.getItem("clevergo_flashcards") !== null) {
    location.href = "/study";
}

const createFlashcard = document.getElementById("create-flashcard");
const createSet = document.getElementById("create-set");

const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");

const flashcardTable = document.getElementById("flashcard-table");

set = {};

const addFlashcardToTable = function(question, answer) {
    const questionEl = document.createElement("td");
    questionEl.innerHTML = question;

    const answerEl = document.createElement("td");
    answerEl.innerHTML = answer;

    const row = document.createElement("tr");
    row.appendChild(questionEl);
    row.appendChild(answerEl);

    flashcardTable.appendChild(row);
}

createFlashcard.addEventListener("click", function() {
    let question = questionInput.value.toString();
    let answer = answerInput.value.toString();

    if (!(question === "" || answer === "")) {
        set[question] = answerInput.value.toString();
        addFlashcardToTable(question, answer);

        questionInput.value = "";
        answerInput.value = "";
    }
});

createSet.addEventListener("click", function() {
    if (Object.keys(set).length > 0) {
        localStorage.setItem("clevergo_flashcards", JSON.stringify(set));
        location.reload();
    }
});