// ============================================================
// BTCLS QUIZ ENGINE
// ============================================================

// -------------------------
// STATE QUIZ
// -------------------------

let quizQuestions = [];
let currentQuestionIndex = 0;

let userAnswers = [];
let questionStatus = [];

let correctAnswers = 0;
let wrongAnswers = 0;
let skippedAnswers = 0;


// -------------------------
// ELEMENT DOM
// -------------------------

const questionNumber = document.getElementById("question-number");
const questionTopic = document.getElementById("question-topic");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const btnNext = document.getElementById("btn-next");
const btnSkip = document.getElementById("btn-skip");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const currentScore = document.getElementById("current-score");


// -------------------------
// SHUFFLE ARRAY
// -------------------------

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(
            Math.random() * (i + 1)
        );

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}


// -------------------------
// MEMULAI QUIZ
// -------------------------

function startQuiz() {

    // Random urutan soal
    quizQuestions = shuffleArray(questions);

    // Pastikan jumlah soal 100
    quizQuestions = quizQuestions.slice(0, 100);

    // Array jawaban user
    userAnswers = new Array(
        quizQuestions.length
    ).fill(null);

    // Status setiap soal
    questionStatus = new Array(
        quizQuestions.length
    ).fill("unanswered");

    currentQuestionIndex = 0;

    correctAnswers = 0;
    wrongAnswers = 0;
    skippedAnswers = 0;

    showQuestion();
}


// -------------------------
// TAMPILKAN SOAL
// -------------------------

function showQuestion() {

    const question =
        quizQuestions[currentQuestionIndex];

    if (!question) {
        finishQuiz();
        return;
    }

    // Nomor soal
    questionNumber.textContent =
        `Soal ${currentQuestionIndex + 1}`;

    // Topik
    questionTopic.textContent =
        question.topic;

    // Pertanyaan
    questionText.textContent =
        question.question;

    // Progress
    const total =
        quizQuestions.length;

    const current =
        currentQuestionIndex + 1;

    const percentage =
        (current / total) * 100;

    progressBar.style.width =
        `${percentage}%`;

    progressText.textContent =
        `${current} / ${total}`;

    // Score
    updateScore();

    // Bersihkan pilihan
    optionsContainer.innerHTML = "";

    // Pilihan
    Object.entries(question.options)
        .forEach(([key, value]) => {

            const button =
                document.createElement("button");

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

            optionsContainer.appendChild(button);
        });

    // Kalau sebelumnya sudah dijawab
    if (userAnswers[currentQuestionIndex]) {

        restoreAnswer();
    }

    updateNavigationButtons();
}


// -------------------------
// PILIH JAWABAN
// -------------------------

function selectAnswer(answer) {

    // Jangan bisa menjawab ulang
    // jika sudah pernah memilih
    if (
        questionStatus[currentQuestionIndex]
        === "answered"
    ) {
        return;
    }

    const question =
        quizQuestions[currentQuestionIndex];

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


    userAnswers[currentQuestionIndex] =
        answer;

    questionStatus[currentQuestionIndex] =
        "answered";


    // Hitung benar / salah
    if (answer === question.answer) {

        correctAnswers++;

    } else {

        wrongAnswers++;
    }


    // Tampilkan feedback
    showFeedback(answer);

    updateScore();

    updateNavigationButtons();
}


// -------------------------
// FEEDBACK
// -------------------------

function showFeedback(answer) {

    const question =
        quizQuestions[currentQuestionIndex];

    let feedback =
        document.getElementById(
            "answer-feedback"
        );

    if (!feedback) {

        feedback =
            document.createElement("div");

        feedback.id =
            "answer-feedback";

        optionsContainer.after(
            feedback
        );
    }


    if (answer === question.answer) {

        feedback.className =
            "answer-feedback correct-feedback";

        feedback.innerHTML = `
            <strong>✓ BENAR</strong>
            <p>
                ${question.explanation}
            </p>
        `;

    } else {

        feedback.className =
            "answer-feedback wrong-feedback";

        feedback.innerHTML = `
            <strong>✕ SALAH</strong>

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
}


// -------------------------
// RESTORE JAWABAN
// -------------------------

function restoreAnswer() {

    const selected =
        userAnswers[currentQuestionIndex];

    const question =
        quizQuestions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(
            ".option-button"
        );

    buttons.forEach(button => {

        button.disabled = true;

        if (
            button.dataset.answer === selected
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

    showFeedback(selected);
}


// -------------------------
// SKIP SOAL
// -------------------------

function skipQuestion() {

    // Jika sudah dijawab
    if (
        questionStatus[currentQuestionIndex]
        === "answered"
    ) {
        goToNextQuestion();
        return;
    }

    // Tandai skipped
    questionStatus[currentQuestionIndex] =
        "skipped";

    skippedAnswers++;

    userAnswers[currentQuestionIndex] =
        null;

    goToNextQuestion();
}


// -------------------------
// SOAL BERIKUTNYA
// -------------------------

function goToNextQuestion() {

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


// -------------------------
// SOAL SEBELUMNYA
// -------------------------

function goToPreviousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        showQuestion();
    }
}


// -------------------------
// NAVIGATION
// -------------------------

function updateNavigationButtons() {

    if (!btnNext) return;

    const status =
        questionStatus[currentQuestionIndex];

    if (
        currentQuestionIndex ===
        quizQuestions.length - 1
    ) {

        btnNext.textContent =
            "Selesai";

    } else {

        btnNext.textContent =
            "Berikutnya →";
    }


    // Tombol skip
    if (btnSkip) {

        if (status === "answered") {

            btnSkip.textContent =
                "Berikutnya →";

        } else {

            btnSkip.textContent =
                "Lewati →";
        }
    }
}


// -------------------------
// SCORE
// -------------------------

function updateScore() {

    if (!currentScore) return;

    const answered =
        correctAnswers +
        wrongAnswers;

    let score = 0;

    if (quizQuestions.length > 0) {

        score =
            Math.round(
                (correctAnswers /
                quizQuestions.length) *
                100
            );
    }

    currentScore.textContent =
        score;
}


// -------------------------
// FINISH QUIZ
// -------------------------

function finishQuiz() {

    // Hitung ulang skipped
    skippedAnswers =
        questionStatus.filter(
            status => status === "skipped"
        ).length;

    const total =
        quizQuestions.length;

    const answered =
        correctAnswers +
        wrongAnswers;

    const score =
        Math.round(
            (correctAnswers / total) * 100
        );


    // Simpan hasil ke localStorage
    const result = {

        total: total,

        correct: correctAnswers,

        wrong: wrongAnswers,

        skipped: skippedAnswers,

        answered: answered,

        score: score,

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


    // Pindah ke halaman hasil
    window.location.href =
        "hasil.html";
}


// -------------------------
// EVENT BUTTON
// -------------------------

if (btnNext) {

    btnNext.addEventListener(
        "click",
        () => {

            const status =
                questionStatus[
                    currentQuestionIndex
                ];

            // Jika belum dijawab
            if (status === "unanswered") {

                skipQuestion();

                return;
            }

            goToNextQuestion();
        }
    );
}


if (btnSkip) {

    btnSkip.addEventListener(
        "click",
        skipQuestion
    );
}


// -------------------------
// START
// -------------------------

document.addEventListener(
    "DOMContentLoaded",
    startQuiz
);
