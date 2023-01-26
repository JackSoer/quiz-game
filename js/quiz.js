class QuizModel {
  constructor() {
    this.quiz = {
      category: 'Marvel & DC',
      questions: [
        {
          id: 1,
          question: 'What is Hawkeye’s real name?',
          answers: [
            { answer: 'Riri Williams', isCorrect: false },
            { answer: 'Chon Li', isCorrect: false },
            { answer: 'Emil Blonsky', isCorrect: false },
            { answer: 'Clint Barton', isCorrect: true },
          ],
        },
        {
          id: 2,
          question:
            'Night Crawler, member of the X-Men, has what kind of powers?',
          answers: [
            { answer: 'Can teleport', isCorrect: true },
            { answer: 'Speed', isCorrect: false },
            { answer: 'Power', isCorrect: false },
            { answer: 'Fireball', isCorrect: false },
          ],
        },
        {
          id: 3,
          question:
            'Which Avenger is the only one who could calm the Hulk down?',
          answers: [
            { answer: 'Iron Man', isCorrect: false },
            { answer: 'Thor', isCorrect: false },
            { answer: 'Wasp', isCorrect: false },
            { answer: 'Black Widow', isCorrect: true },
          ],
        },
        {
          id: 4,
          question: 'Which infinity stone was located on Vormir?',
          answers: [
            { answer: 'Space Stone', isCorrect: false },
            { answer: 'Soul Stone', isCorrect: true },
            { answer: 'Mind Stone', isCorrect: false },
            { answer: 'Reality Stone', isCorrect: true },
          ],
        },
        {
          id: 5,
          question: 'Which original Avenger was not in the first few movies?',
          answers: [
            { answer: 'Iron Man', isCorrect: false },
            { answer: 'Black Widow', isCorrect: false },
            { answer: 'The Wasp', isCorrect: true },
            { answer: 'Captain America', isCorrect: false },
          ],
        },
      ],
    };

    this.score = 0;
    this.questionIndex = 1;
    this.wrongAnswer = 0;
    this.correctAnswer = 0;
  }

  checkAnswer(chosenAnswer) {
    if (this.getCorrectAnswer() === chosenAnswer) {
      this.increaseScore();
    } else {
      this.decreaseScore();
    }

    this.switchToNextQuestion();
  }

  isLastQuestion() {
    if (this.questionIndex === this.quiz.questions.length + 1) {
      return true;
    } else {
      return false;
    }
  }

  restartQuiz() {
    this.questionIndex = 1;
    this.score = 0;
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
  }

  increaseScore() {
    this.score += 100;
    this.correctAnswer++;
  }

  decreaseScore() {
    this.score -= 100;
    this.wrongAnswer++;
  }

  switchToNextQuestion() {
    this.questionIndex++;
  }

  getCurrentQuestion() {
    const [question] = this.quiz.questions.filter(
      (question) => question.id === this.questionIndex
    );

    return question;
  }

  getCorrectAnswer() {
    const [correctAnswer] = this.getCurrentQuestion().answers.filter(
      (answer) => answer.isCorrect
    );

    return correctAnswer.answer;
  }

  getResultData() {
    return {
      score: this.score,
      correctAnswer: this.correctAnswer,
      wrongAnswer: this.wrongAnswer,
    };
  }
}

class QuizController {
  constructor(model) {
    this.model = model;
  }

  answerBtnHandler(chosenAnswer) {
    this.model.checkAnswer(chosenAnswer);
  }

  restartBtnHandler() {
    this.model.restartQuiz();
  }

  isLastQuestion() {
    return this.model.isLastQuestion();
  }

  getResultData() {
    return this.model.getResultData();
  }

  getCurrentQuestion() {
    return this.model.getCurrentQuestion();
  }

  getQuestionAmount() {
    return this.model.quiz.questions.length;
  }

  getScore() {
    return this.model.score;
  }

  getCategory() {
    return this.model.quiz.category;
  }
}

class QuizView {
  constructor(controller) {
    this.controller = controller;

    this.showQuiz();
    this.bindListeners();
  }

  onAnswerBtnClick(e) {
    const currentAnswer = e.target.innerText;
    this.controller.answerBtnHandler(currentAnswer);

    if (this.controller.isLastQuestion()) {
      this.showResult();
    } else {
      this.showQuiz();
    }
  }

  onRestartBtnClick() {
    this.controller.restartBtnHandler();

    this.showQuiz();
  }

  showResult() {
    const resultScreen = document.querySelector('.result');
    resultScreen.classList.remove('display-none');
    const gameScreen = document.querySelector('.game');
    gameScreen.classList.add('display-none');
    const header = document.querySelector('.header');
    header.classList.add('display-none');

    this.renderResultData();
  }

  renderResultData() {
    const totalScoreScreen = document.querySelector('.result__total-score');
    const corectAnswerScreen = document.querySelector(
      '.result__correct-answer-amount'
    );
    const wrongAnswerScreen = document.querySelector(
      '.result__wrong-answer-amount'
    );

    totalScoreScreen.innerText = `Total score: ${
      this.controller.getResultData().score
    }`;
    corectAnswerScreen.innerText = `Correct answers: ${
      this.controller.getResultData().correctAnswer
    }`;
    wrongAnswerScreen.innerText = `Wrong answers: ${
      this.controller.getResultData().wrongAnswer
    }`;
  }

  showQuiz() {
    const resultScreen = document.querySelector('.result');
    resultScreen.classList.add('display-none');
    const gameScreen = document.querySelector('.game');
    gameScreen.classList.remove('display-none');
    const header = document.querySelector('.header');
    header.classList.remove('display-none');

    this.renderQuiz();
  }

  renderQuiz() {
    this.displayQuestion();
    this.displayAnswers();
    this.displayQuestionCounter();
    this.displayScore();
    this.displayCategory();
  }

  displayQuestion() {
    const questionTitle = document.querySelector('.game__question');

    questionTitle.innerText = this.controller.getCurrentQuestion().question;
  }

  displayAnswers() {
    const answerBtns = document.querySelectorAll('.game__answers-item');
    const answers = this.controller.getCurrentQuestion().answers;

    answerBtns.forEach(
      (answerBtn, index) => (answerBtn.innerText = answers[index].answer)
    );
  }

  displayQuestionCounter() {
    const questionsCounter = document.querySelector('.game__questions-counter');

    questionsCounter.innerText = `Question ${
      this.controller.getCurrentQuestion().id
    } / ${this.controller.getQuestionAmount()}`;
  }

  displayScore() {
    const scoreScreen = document.querySelector('.header__score');

    scoreScreen.innerText = `Score: ${this.controller.getScore()}`;
  }

  displayCategory() {
    const categoryScreen = document.querySelector('.header__quiz-category');

    categoryScreen.innerText = this.controller.getCategory();
  }

  bindListeners() {
    const answerBtns = document.querySelectorAll('.game__answers-item');
    const restartBtn = document.querySelector('.result__game-restart');

    answerBtns.forEach((answerBtn) =>
      answerBtn.addEventListener('click', (e) => this.onAnswerBtnClick(e))
    );
    restartBtn.addEventListener('click', () => this.onRestartBtnClick());
  }
}

const quizModel = new QuizModel();
const quizController = new QuizController(quizModel);
const quizView = new QuizView(quizController);
