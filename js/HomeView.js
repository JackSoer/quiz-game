import QuizModel from './QuizModel.js';
import QuizController from './QuizController.js';
import QuizView from './QuizView.js';
import quizes from './quizes.js';

export default class HomeView {
  constructor() {
    this.quizes = quizes;
    this.homeDiv = document.querySelector('.quizes-container');

    this.renderCategories();
    this.bindListeners();
  }

  renderCategories() {
    let categoryBtn;

    quizes.forEach((quiz) => {
      categoryBtn = `<button class="quizes__categories">
      <div class="quizes__quiz-item quiz">
        <div class="quiz__img">
          <img
            src="images/question-images/${quiz.questions[0].questionImg}"
            alt="Your image dissapeared"
            class="quiz__img-item"
          />
        </div>
        <h2 class="quiz__title">${quiz.category}</h2>
      </div>
    </button>`;

      this.homeDiv.innerHTML += categoryBtn;
    });
  }

  renderQuizes(category) {
    const quizes = this.getQuizesByCategory(category);

    let quizBtn;

    quizes.forEach((quiz) => {
      quizBtn = `<button class="quizes__quiz">
      <div class="quizes__quiz-item quiz">
        <div class="quiz__img">
          <img
            src="images/question-images/${quiz.questions[0].questionImg}"
            alt="Your image dissapeared"
            class="quiz__img-item"
          />
        </div>
        <h2 class="quiz__title">${quiz.title}</h2>
      </div>
    </button>`;

      this.homeDiv.innerHTML += quizBtn;
    });
  }

  getQuizesByCategory(category) {
    return this.quizes.filter((quiz) => quiz.category === category);
  }

  getQuizesByTitle(title) {
    return this.quizes.filter((quiz) => quiz.title === title);
  }

  onCategoryClick(e) {
    let category = e.target
      .closest('.quizes__quiz-item')
      .querySelector('.quiz__title').innerText;

    this.clearContent();
    this.renderQuizes(category);
    this.bindListeners();
  }

  onQuizClick(e) {
    let quizTitle = e.target
      .closest('.quizes__quiz-item')
      .querySelector('.quiz__title').innerText;

    const [quiz] = this.getQuizesByTitle(quizTitle);

    this.clearContent;

    const quizModel = new QuizModel(quiz);
    const quizController = new QuizController(quizModel);
    const quizView = new QuizView(quizController);
  }

  clearContent() {
    this.homeDiv.innerHTML = '';
  }

  bindListeners() {
    const categoriesBtns = document.querySelectorAll('.quizes__categories');
    const quizesBtns = document.querySelectorAll('.quizes__quiz');

    categoriesBtns.forEach((categoryBtn) =>
      categoryBtn.addEventListener('click', (e) => this.onCategoryClick(e))
    );
    quizesBtns.forEach((quizBtn) =>
      quizBtn.addEventListener('click', (e) => this.onQuizClick(e))
    );
  }
}
