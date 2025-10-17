const questions = [{ // 1 HTML
        question: "A respeito do HyperText Markup Language (HTML) qual alternativa descreve sua função principal em um site?",
        options: [
            "Definir o estilo visual e cores da página", 
            "Criar a estrutura e o conteúdo da página", 
            "Fazer animações e efeitos visuais", 
            "Controlar a lógica e o comportamento da página"
        ],
        answer: 1
    },
    { // 2 CSS
        question: "Qual a utilidade do Cascading Style Sheet (CSS) em uma página web?",
        options: [
            "Armazenar dados de usuários", 
            "Executar scripts no navegador", 
            "Definir a estrutura da página", 
            "Implementar o design visual do site"
        ],
        answer: 3
    },
    { // 3 JS
        question: "Qual das opções NÃO representa o papel do JavaScript (JS) em um site?",
        options: [
            "Tornar a página interativa e dinâmica", 
            "Definir o layout e o design visual do site", 
            "Manipular elementos HTML em tempo real", 
            "Responder a ações do usuário, como cliques e teclas"
        ],
        answer: 1
    },
    { // 4 CSS1
        question: "Qual das opções abaixo aplica cor de fundo azul a um elemento com a classe .box em CSS?",
        options: [
            ".box { background-color: blue; }", 
            ".box { color: blue; }", 
            "box { background: blue; }", 
            ".box { border-color: blue; }"
        ],
        answer: 0
    },
    { // 5 JS1
        question: 'Em JavaScript, qual é o resultado de: console.log(2 + "2");?',
        options: [
            "4", 
            "22", 
            "undefined", 
            "NaN"
        ],
        answer: 1
    },
    { // 6 JS2
        question: "Como se declara uma variável em JavaScript?",
        options: [
            'var nome = "Clara";', 
            'let nome = "Clara";', 
            'const nome = "Clara";', 
            "Todas as alternativas estão corretas"
        ],
        answer: 3
    },
    { // 7 HTML1
        question: "Qual dessas tags é usada para criar um link em HTML?",
        options: [
            "&lt;a&gt;", 
            "&lt;link&gt;", 
            "&lt;url&gt;", 
            "&lt;href&gt;"
        ],
        answer: 0
    },
    { // 8 CSS2
        question: "Em CSS, o que significa o seletor #menu ul li { }?",
        options: [
            'Seleciona todos os elementos li dentro de ul, dentro do elemento com id “menu”', 
            'Seleciona todos os elementos ul com id “menu”', 
            'Seleciona apenas o elemento li com id “menu”', 
            "Seleciona o primeiro ul dentro de li"
        ],
        answer: 0
    },
    { // 9 HTML2
        question: "Qual tag HTML é usada para criar uma lista numerada?",
        options: [
            "&lt;ul&gt;", 
            "&lt;li&gt;", 
            "&lt;ol&gt;", 
            "&lt;dl&gt;"
        ],
        answer: 2
    },
    { // 10 HTML3
        question: "Qual atributo HTML é usado para especificar um arquivo JavaScript externo?",
        options: [
            "&lt;script href='app.js'&gt;&lt;/script&gt;",
            "&lt;script name='app.js'&gt;&lt;/script&gt;",
            "&lt;script src='app.js'&gt;&lt;/script&gt;",
            "&lt;script file='app.js'&gt;&lt;/script&gt;"
        ],
        answer: 2
    },
    { // 11 JS3
        question: "O que acontece se você declarar duas funções JavaScript com o mesmo nome no mesmo escopo?",
        options: [
            "As duas coexistem, mas apenas a primeira é chamada",
            "A segunda substitui a primeira",
            "Gera erro de sintaxe",
            "Nenhuma das duas é executável"
        ],
        answer: 1
    },
    { // 12 CSS3
        question: "Qual das opções abaixo NÃO é um valor válido para a propriedade CSS display?",
        options: [
            "inline-block", 
            "grid", 
            "hidden", 
            "flex"
        ],
        answer: 2
    },
    { // 13 JS4
        question: 'Considere \nconsole.log(null == undefined); e \nconsole.log(null === undefined);. \nO que será impresso?',
        options: [
            "true, true",
            "false, false", 
            "true, false", 
            "false, true"
        ],
        answer: 2
    },
    { // 14 HTML4
        question: "Em HTML5, qual elemento semântico é mais apropriado para agrupar conteúdo que representa uma seção independente do documento?",
        options: [
            "&lt;div&gt;", 
            "&lt;section&gt;", 
            "&lt;article&gt;", 
            "&lt;aside&gt;"
        ],
        answer: 2
    },
    { // 15 CSS4
        question: "No CSS, qual é o efeito de position: sticky?",
        options: [
            "Fixa o elemento no topo da página permanentemente",
            "Mantém o elemento fixo apenas quando rola até um determinado ponto",
            "Fixa o elemento em relação à viewport, como fixed",
            "Move o elemento junto com o scroll, como relative"
        ],
        answer: 1
    },
];

let currentQuestion = 0;
let score = 0;
let username = "";

function StartQuiz() {
    username = document.getElementById("username").value.trim();
    if (!username) return alert("Por favor, digite seu nome para continuar.");
    document.getElementById("quiz-form").classList.add("hidden");
    document.getElementById("quiz-footer").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    ShowQuestion();
}

function ShowQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    const q = questions[currentQuestion];
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const title = document.createElement("h2");
    title.textContent = `Questão ${currentQuestion + 1}: ${q.question}`;
    questionDiv.appendChild(title);

    const letters = ["A", "B", "C", "D"];

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerHTML = `<strong>${letters[index]})</strong> ${option}`;
        btn.onclick = () => checkAnswer(index);
        questionDiv.appendChild(btn);
    });

    quizContainer.appendChild(questionDiv);
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) score++;
    currentQuestion++;

    if (currentQuestion < questions.length) ShowQuestion();
    else ShowResult();
}

function ShowResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("quiz-footer").classList.remove("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const total = questions.length;
    const errors = total - score;
    const percent = Math.round((score / total) * 100);

    let message = "";
    if (percent >= 80) message = "Excelente, continue assim!";
    else if (percent >= 50) message = "Bom desempenho, foco nos estudos!";
    else message = "Precisa melhorar, não desista!";

  document.getElementById("score").textContent = `${username}, você acertou ${score} de ${total} questões (${percent}%)`;
  document.getElementById("message").textContent = message;

  RenderChart(score, errors);
}

function RenderChart(acertos, erros) {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Acertos", "Erros"],
            datasets: [{
                    data: [acertos, erros],
                    backgroundColor: ["#28a745", "#dc3545"]
                }]
        }
    });
}