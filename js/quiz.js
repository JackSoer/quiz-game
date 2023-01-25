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
  }

  increaseScore() {
    this.score += 100;
  }

  decreaseScore() {
    this.score -= 100;
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
}

class QuizController {
  constructor(model) {
    this.model = model;
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

    this.render();
  }

  render() {
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
}

const quizModel = new QuizModel();
const quizController = new QuizController(quizModel);
const quizView = new QuizView(quizController);
