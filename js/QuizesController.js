import QuizesModel from './QuizesModel.js';

export default class HomeContoller {
  constructor() {
    this.model = new QuizesModel();
  }

  getQuizesByCategory(category) {
    return this.model.quizes.filter((quiz) => quiz.category === category);
  }

  getQuizesByTitle(title) {
    return this.model.quizes.filter((quiz) => quiz.title === title);
  }

  getAllCategories() {
    const categories = new Set();

    this.model.quizes.forEach((quiz) => categories.add(quiz.category));

    return Array.from(categories);
  }
}
