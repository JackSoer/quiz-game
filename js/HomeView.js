import QuizModel from './QuizModel.js';
import QuizController from './QuizController.js';
import QuizView from './QuizView.js';
import HomeContoller from './HomeContoller.js';

export default class HomeView {
  constructor() {
    this.controller = new HomeContoller();
    this.mount();
    this.homeDiv = document.querySelector('.quizes-container');

    this.renderCategories();
    this.bindListeners();
  }

  renderCategories() {
    let categoryBtn;
    let categoryImg;
    const categories = this.controller.getAllCategories();

    categories.forEach((category) => {
      categoryImg =
        this.controller.getQuizesByCategory(category)[0].questions[0]
          .questionImg;
      categoryBtn = `<button class="quizes__categories">
      <div class="quizes__quiz-item quiz">
        <div class="quiz__img">
          <img
            src="images/question-images/${categoryImg}"
            alt="Your image dissapeared"
            class="quiz__img-item"
          />
        </div>
        <h2 class="quiz__title">${category}</h2>
      </div>
    </button>`;

      this.homeDiv.innerHTML += categoryBtn;
    });
  }

  renderQuizes(category) {
    const quizes = this.controller.getQuizesByCategory(category);

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

    this.addBackBtn();
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

    const [quiz] = this.controller.getQuizesByTitle(quizTitle);

    this.clearContent;

    const quizModel = new QuizModel(quiz);
    const quizController = new QuizController(quizModel);
    const quizView = new QuizView(quizController);
  }

  addBackBtn() {
    const quizes = document.querySelector('.quizes');

    quizes.innerHTML += `<button class="quizes__back-btn">Back</button>`;

    const backBtn = document.querySelector('.quizes__back-btn');

    backBtn.addEventListener('click', () => this.onBackBtnClick());
  }

  onBackBtnClick() {
    new HomeView();
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

  mount() {
    document.body.innerHTML = `<header class="header header-home">
    <h1 class="header__title">Quizzes</h1>
  </header>
  <main class="main">
    <div class="quizes">
      <div class="container quizes-container"></div>
    </div>
  </main>`;
  }
}
