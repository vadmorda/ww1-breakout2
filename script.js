document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript loaded correctly.");

    // 🔹 Ocultar TODAS las páginas menos la de inicio
    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
    document.getElementById("page-intro").classList.remove("hidden");

    // 🔹 FUNCIÓN PARA MOSTRAR PÁGINAS
    function showPage(pageToShow) {
        document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
        document.getElementById(pageToShow).classList.remove("hidden");
    }

    // 🔹 BOTÓN "ENTER WAR ZONE" → LLEVA AL RETO 1
    const startButton = document.getElementById("start-challenge-1");
    if (startButton) {
        startButton.addEventListener("click", function () {
            console.log("🎯 Botón 'Enter War Zone' presionado. Cargando Challenge 1...");
            showPage("challenge-1"); // 🔹 Muestra el reto 1
        });
    } else {
        console.error("❌ ERROR: No se encontró el botón #start-challenge-1 en el DOM.");
    }

    // 🔹 BOTÓN "READ HIS MEMORY" → LLEVA A LA PÁGINA DE MEMORIA
    const memoryButton = document.getElementById("read-memory");
    if (memoryButton) {
        memoryButton.addEventListener("click", function () {
            console.log("📖 Botón 'Read His Memory' presionado. Cargando Memoria...");
            showPage("memory-page"); // 🔹 Muestra la página de memoria
        });
    } else {
        console.error("❌ ERROR: No se encontró el botón #read-memory en el DOM.");
    }

    // 🔹 CONFIGURACIÓN DEL CUESTIONARIO
    const quizContainer = document.getElementById("quiz-container");
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const errorMessage = document.getElementById("error-message");
    const nextButton = document.getElementById("next-question");

    const questions = [
        {
            question: "What was Germany's main military goal in 1916?",
            answers: ["A) Capture Moscow", "B) Force Britain to surrender", "C) Inflict massive casualties on France"],
            correct: 2
        },
        {
            question: "What was the longest battle of World War I, lasting from February to December 1916?",
            answers: ["A) Battle of Verdun", "B) Battle of Ypres", "C) Battle of the Marne"],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            console.log("✅ Todas las preguntas han sido respondidas correctamente. Cargando Challenge 2...");
            showPage("challenge-2"); // 🔹 Redirige a Challenge 2
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        answersContainer.innerHTML = "";

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.classList.add("answer-button");
            button.addEventListener("click", function () {
                if (index === currentQuestion.correct) {
                    currentQuestionIndex++;
                    errorMessage.classList.add("hidden");
                    loadQuestion();
                } else {
                    errorMessage.classList.remove("hidden");
                }
            });
            answersContainer.appendChild(button);
        });
    }

    if (quizContainer) {
        loadQuestion();
    }
});
    if (quizContainer) {
        loadQuestion();
    }
});
