// ============================================================
// BTCLS QUIZ ENGINE
// ============================================================

let quizQuestions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let questionStatus = [];


// ============================================================
// DOM
// ============================================================

const questionNumber =
    document.getElementById("question-number");

const questionTopic =
    document.getElementById("question-topic");

const questionText =
    document.getElementById("question-text");

const optionsContainer =
    document.getElementById("options-container");

const btnNext =
    document.getElementById("btn-next");

const btnSkip =
    document.getElementById("btn-skip");

const progressBar =
    document.getElementById("progress-bar");

const progressText =
    document.getElementById("progress-text");

const currentScore =
    document.getElementById("current-score");


// ============================================================
// SHUFFLE
// ============================================================

function shuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];
    }

    return result;
}


// ============================================================
// START
// ============================================================

function startQuiz() {

    quizQuestions =
        shuffle(questions).slice(0, 100);


    userAnswers =
        new Array(
            quizQuestions.length
        ).fill(null);


    questionStatus =
        new Array(
            quizQuestions.length
        ).fill("unanswered");


    currentQuestionIndex = 0;


    showQuestion();
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    const question =
        quizQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        finishQuiz();

        return;
    }


    questionNumber.textContent =
        `Soal ${currentQuestionIndex + 1}`;


    questionTopic.textContent =
        question.topic;


    questionText.textContent =
        question.question;


    // progress

    const total =
        quizQuestions.length;

    const current =
        currentQuestionIndex + 1;


    progressText.textContent =
        `${current} / ${total}`;


    progressBar.style.width =
        `${(current / total) * 100}%`;


    // score

    updateScore();


    // clear

    optionsContainer.innerHTML = "";


    const feedback =
        document.getElementById(
            "answer-feedback"
        );


    if (feedback) {

        feedback.remove();
    }


    // options

    Object.entries(
        question.options
    ).forEach(
        ([key, value]) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";

            button.className =
                "option-button";


            button.dataset.answer =
                key;


            button.innerHTML = `

                <span class="option-letter">
                    ${key}
                </span>

                <span class="option-text">
                    ${value}
                </span>

            `;


            button.addEventListener(
                "click",
                () => selectAnswer(key)
            );


            optionsContainer.appendChild(
                button
            );
        }
    );


    // restore

    if (
        questionStatus[
            currentQuestionIndex
        ] === "answered"
    ) {

        restoreAnswer();
    }


    updateNavigation();
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(answer) {

    if (
        questionStatus[
            currentQuestionIndex
        ] === "answered"
    ) {

        return;
    }


    const question =
        quizQuestions[
            currentQuestionIndex
        ];


    userAnswers[
        currentQuestionIndex
    ] = answer;


    questionStatus[
        currentQuestionIndex
    ] = "answered";


    const buttons =
        document.querySelectorAll(
            ".option-button"
        );


    buttons.forEach(button => {

        button.disabled = true;


        if (
            button.dataset.answer === answer
        ) {

            button.classList.add(
                "selected"
            );
        }


        if (
            button.dataset.answer ===
            question.answer
        ) {

            button.classList.add(
                "correct"
            );
        }

    });


    showFeedback(answer);


    updateScore();

    updateNavigation();
}


// ============================================================
// FEEDBACK
// ============================================================

function showFeedback(answer) {

    const question =
        quizQuestions[
            currentQuestionIndex
        ];


    const feedback =
        document.createElement("div");


    feedback.id =
        "answer-feedback";


    if (
        answer === question.answer
    ) {

        feedback.className =
            "answer-feedback correct-feedback";


        feedback.innerHTML = `

            <strong>✓ JAWABAN BENAR</strong>

            <p>
                ${question.explanation}
            </p>

        `;

    } else {

        feedback.className =
            "answer-feedback wrong-feedback";


        feedback.innerHTML = `

            <strong>✕ JAWABAN SALAH</strong>

            <p>
                Jawaban yang benar:
                <strong>
                    ${question.answer}
                </strong>
            </p>

            <p>
                ${question.explanation}
            </p>

        `;
    }


    optionsContainer.after(feedback);
}


// ============================================================
// RESTORE
// ============================================================

function restoreAnswer() {

    const answer =
        userAnswers[
            currentQuestionIndex
        ];


    const question =
        quizQuestions[
            currentQuestionIndex
        ];


    const buttons =
        document.querySelectorAll(
            ".option-button"
        );


    buttons.forEach(button => {

        button.disabled = true;


        if (
            button.dataset.answer === answer
        ) {

            button.classList.add(
                "selected"
            );
        }


        if (
            button.dataset.answer ===
            question.answer
        ) {

            button.classList.add(
                "correct"
            );
        }

    });


    showFeedback(answer);
}


// ============================================================
// SKIP
// ============================================================

function skipQuestion() {

    if (
        questionStatus[
            currentQuestionIndex
        ] === "answered"
    ) {

        goNext();

        return;
    }


    questionStatus[
        currentQuestionIndex
    ] = "skipped";


    goNext();
}


// ============================================================
// NEXT
// ============================================================

function goNext() {

    if (
        currentQuestionIndex <
        quizQuestions.length - 1
    ) {

        currentQuestionIndex++;

        showQuestion();

    } else {

        finishQuiz();
    }
}


// ============================================================
// PREVIOUS
// ============================================================

function goPrevious() {

    if (
        currentQuestionIndex > 0
    ) {

        currentQuestionIndex--;

        showQuestion();
    }
}


// ============================================================
// NAVIGATION
// ============================================================

function updateNavigation() {

    const status =
        questionStatus[
            currentQuestionIndex
        ];


    if (
        currentQuestionIndex ===
        quizQuestions.length - 1
    ) {

        btnNext.textContent =
            "Selesaikan Ujian";

    } else {

        btnNext.textContent =
            "Berikutnya →";
    }


    if (
        status === "answered"
    ) {

        btnSkip.textContent =
            "Berikutnya →";

    } else {

        btnSkip.textContent =
            "Lewati →";
    }
}


// ============================================================
// SCORE
// ============================================================

function updateScore() {

    if (!currentScore) return;


    let correct = 0;


    quizQuestions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                correct++;
            }
        }
    );


    const score =
        Math.round(
            (correct /
                quizQuestions.length) *
            100
        );


    currentScore.textContent =
        score;
}


// ============================================================
// FINISH
// ============================================================

function finishQuiz() {

    let correct = 0;

    let wrong = 0;

    let skipped = 0;


    quizQuestions.forEach(
        (question, index) => {

            const answer =
                userAnswers[index];


            if (!answer) {

                skipped++;

            } else if (
                answer === question.answer
            ) {

                correct++;

            } else {

                wrong++;
            }

        }
    );


    const total =
        quizQuestions.length;


    const score =
        Math.round(
            (correct / total) * 100
        );


    const result = {

        total,

        correct,

        wrong,

        skipped,

        score,

        questions: quizQuestions,

        answers: userAnswers,

        statuses: questionStatus,

        completedAt:
            new Date().toISOString()
    };


    localStorage.setItem(
        "btclsQuizResult",
        JSON.stringify(result)
    );


    window.location.href =
        "hasil.html";
}


// ============================================================
// EVENTS
// ============================================================

btnNext.addEventListener(
    "click",
    () => {

        if (
            questionStatus[
                currentQuestionIndex
            ] === "unanswered"
        ) {

            skipQuestion();

        } else {

            goNext();
        }
    }
);


btnSkip.addEventListener(
    "click",
    skipQuestion
);


// ============================================================
// START
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    startQuiz
);
