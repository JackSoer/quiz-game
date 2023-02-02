export default class QuizController {
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

  isCorrectAnswer(chosenAnswer) {
    return this.model.isCorrectAnswer(chosenAnswer);
  }

  isNewBestScore() {
    return this.model.isNewBestScore;
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

  getBestScore() {
    return this.model.bestScore;
  }

  getTitle() {
    return this.model.quiz.title;
  }

  getAnswerTime() {
    return this.model.quiz.answerTime;
  }

  getQuestionIndex() {
    return this.model.questionIndex;
  }
}
