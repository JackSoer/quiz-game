import quizes from './quizes.js';

export default class HomeContoller {
  constructor() {
    this.quizes = quizes;
  }

  getQuizesByCategory(category) {
    return this.quizes.filter((quiz) => quiz.category === category);
  }

  getQuizesByTitle(title) {
    return this.quizes.filter((quiz) => quiz.title === title);
  }

  getAllCategories() {
    const categories = new Set();

    quizes.forEach((quiz) => categories.add(quiz.category));

    return Array.from(categories);
  }
}
