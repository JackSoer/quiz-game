export default class QuizModel {
  constructor(quiz) {
    this.quiz = quiz;

    this.questionIndex = 1;
    if (localStorage.getItem(`bestScore ${this.quiz.title}`) !== null) {
      this.bestScore = Number(
        localStorage.getItem(`bestScore ${this.quiz.title}`)
      );
    } else {
      this.bestScore = 0;
    }
    this.score = 0;
    this.wrongAnswer = 0;
    this.correctAnswer = 0;
    this.isNewBestScore = false;
  }

  saveBestScore() {
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      this.isNewBestScore = true;

      localStorage.setItem(
        `bestScore ${this.quiz.title}`,
        String(this.bestScore)
      );
    } else {
      this.isNewBestScore = false;
    }
  }

  checkAnswer(chosenAnswer) {
    if (this.isCorrectAnswer(chosenAnswer)) {
      this.increaseScore();
    } else {
      this.wrongAnswer++;
    }

    this.switchToNextQuestion();

    if (this.isLastQuestion()) {
      this.saveBestScore();
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
      bestScore: this.bestScore,
      score: this.score,
      correctAnswer: this.correctAnswer,
      wrongAnswer: this.wrongAnswer,
    };
  }

  isLastQuestion() {
    if (this.questionIndex === this.quiz.questions.length + 1) {
      return true;
    } else {
      return false;
    }
  }

  isCorrectAnswer(chosenAnswer) {
    if (this.getCorrectAnswer() === chosenAnswer) {
      return true;
    } else {
      return false;
    }
  }
}
