class QuizModel {
  constructor() {
    this.quiz = {
      category: 'Marvel & DC',
      answerTime: 30,
      questions: [
        {
          id: 1,
          questionImg: '1q.jpg',
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
          questionImg: '2q.png',
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
          questionImg: '3q.webp',
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
          questionImg: '4q.webp',
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
          questionImg: '5q.jpeg',
          question: 'Which original Avenger was not in the first few movies?',
          answers: [
            { answer: 'Iron Man', isCorrect: false },
            { answer: 'Black Widow', isCorrect: false },
            { answer: 'The Wasp', isCorrect: true },
            { answer: 'Captain America', isCorrect: false },
          ],
        },
        {
          id: 6,
          questionImg: '6q.webp',
          question: 'What was Superman’s birth name?',
          answers: [
            { answer: 'Li', isCorrect: false },
            { answer: 'Jack', isCorrect: false },
            { answer: 'Kal-El', isCorrect: true },
            { answer: 'Nick', isCorrect: false },
          ],
        },
        {
          id: 7,
          questionImg: '7q.jpg',
          question: 'What is the name of Batman’s butler?',
          answers: [
            { answer: 'John', isCorrect: false },
            { answer: 'Domesto', isCorrect: false },
            { answer: 'Alex', isCorrect: false },
            { answer: 'Alfred', isCorrect: true },
          ],
        },
        {
          id: 8,
          questionImg: '8q.avif',
          question: 'Who is Green Lantern’s nemesis?',
          answers: [
            { answer: 'Calisto', isCorrect: false },
            { answer: 'Sinestro', isCorrect: true },
            { answer: 'Carnel', isCorrect: false },
            { answer: 'Jonatan', isCorrect: false },
          ],
        },
      ],
    };

    this.questionIndex = 1;
    if (localStorage.getItem('bestScore') !== null) {
      this.bestScore = Number(localStorage.getItem('bestScore'));
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

      localStorage.setItem('bestScore', String(this.bestScore));
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

  getCategory() {
    return this.model.quiz.category;
  }

  getAnswerTime() {
    return this.model.quiz.answerTime;
  }

  getQuestionIndex() {
    return this.model.questionIndex;
  }
}

class QuizView {
  constructor(controller) {
    this.controller = controller;

    this.questionAudios = [
      {
        questionIndex: 1,
        countDown: 30,
        soundtrack: document.getElementById('1q-countdown30s'),
      },
      {
        questionIndex: 2,
        countDown: 30,
        soundtrack: document.getElementById('2q-countdown30s'),
      },
      {
        questionIndex: 3,
        countDown: 30,
        soundtrack: document.getElementById('3q-countdown30s'),
      },
    ];

    this.questionAudioIndex = 0;
    this.isMuted = true;

    this.showQuiz();
    this.bindListeners();
  }

  onAnswerBtnClick(e) {
    const currentAnswer = e.target.innerText;

    if (this.controller.isCorrectAnswer(currentAnswer)) {
      e.target.classList.add('game__correct-answer');
      this.playCorrectAnswerEffect();
    } else {
      e.target.classList.add('game__wrong-answer');
      this.playWrongAnswerEffect();
    }

    this.controller.answerBtnHandler(currentAnswer);

    if (this.controller.isLastQuestion()) {
      setTimeout(() => this.showResult(), 400);
    } else {
      setTimeout(() => this.showQuiz(), 400);
    }

    this.disableAnswerBtns();
  }

  disableAnswerBtns() {
    const answerBtns = document.querySelectorAll('.game__answers-item');

    answerBtns.forEach((answerBtn) => answerBtn.setAttribute('disabled', true));
  }

  enableAnswerBtns() {
    const answerBtns = document.querySelectorAll('.game__answers-item');

    answerBtns.forEach((answerBtn) => answerBtn.removeAttribute('disabled'));
  }

  playWrongAnswerEffect() {
    const wrongAnswerEffect = document.querySelector('#wrong-answer');

    wrongAnswerEffect.currentTime = 0;

    wrongAnswerEffect.play();
  }

  playCorrectAnswerEffect() {
    const correctAnswerEffect = document.querySelector('#correct-answer');

    correctAnswerEffect.currentTime = 0;

    correctAnswerEffect.play();
  }

  onRestartBtnClick() {
    this.controller.restartBtnHandler();

    this.showQuiz();
  }

  onVolumeBtnClick() {
    const volumeIcon = document.querySelector('.game__volume-btn-icon');

    volumeIcon.classList.toggle('game__volume-btn-icon--muted');

    this.isMuted = volumeIcon.classList.contains(
      'game__volume-btn-icon--muted'
    );

    if (this.isMuted) {
      this.muteSound();
    } else {
      this.playQuestionAudio();
    }
  }

  showQuiz() {
    const resultScreen = document.querySelector('.result');
    resultScreen.classList.add('display-none');
    const gameScreen = document.querySelector('.game');
    gameScreen.classList.remove('display-none');
    const header = document.querySelector('.header');
    header.classList.remove('display-none');

    this.renderQuiz();
    this.playAudio();
  }

  renderQuiz() {
    this.displayQuestionImage();
    this.displayTimerTime();
    this.displayQuestions();
    this.displayAnswers();
    this.displayQuestionCounter();
    this.displayScore();
    this.displayBestScore();
    this.displayCategory();
  }

  displayQuestions() {
    const questionTitle = document.querySelector('.game__question');

    questionTitle.innerText = this.controller.getCurrentQuestion().question;
  }

  displayAnswers() {
    this.enableAnswerBtns();
    this.clearColorOnBtn();

    const answerBtns = document.querySelectorAll('.game__answers-item');
    const answers = this.controller.getCurrentQuestion().answers;

    answerBtns.forEach(
      (answerBtn, index) => (answerBtn.innerText = answers[index].answer)
    );
  }

  displayQuestionCounter() {
    const questionsCounter = document.querySelector('.game__questions-counter');

    questionsCounter.innerText = `${
      this.controller.getCurrentQuestion().id
    } / ${this.controller.getQuestionAmount()}`;
  }

  displayScore() {
    const scoreCounter = document.querySelector('.header__score-counter');

    scoreCounter.innerText = this.controller.getScore();
  }

  displayBestScore() {
    const bestScoreCounter = document.querySelector(
      '.header__best-score-counter'
    );

    bestScoreCounter.innerText = this.controller.getResultData().bestScore;
  }

  displayCategory() {
    const categoryScreen = document.querySelector('.header__quiz-category');

    categoryScreen.innerText = this.controller.getCategory();
  }

  displayQuestionImage() {
    const questionImg = document.querySelector(
      '.game__question-illustration-item'
    );
    const questionImgItem = this.controller.getCurrentQuestion().questionImg;

    questionImg.src = `images/question-images/${questionImgItem}`;
  }

  displayTimerTime() {
    this.removeOldTimer();

    const timerNumber = document.querySelector('.header__game-timer-number');

    let answerTime = this.controller.getAnswerTime();

    this.timer = setInterval(() => {
      if (answerTime === 0) {
        this.removeOldTimer();
        this.controller.answerBtnHandler(null);

        if (this.controller.isLastQuestion()) {
          this.showResult();
        } else {
          this.showQuiz();
        }
      } else {
        timerNumber.innerText = answerTime;
        answerTime--;
      }
    }, 1000);
  }

  removeOldTimer() {
    clearInterval(this.timer);
  }

  clearColorOnBtn() {
    const answerBtns = document.querySelectorAll('.game__answers-item');

    answerBtns.forEach((answerBtn) => {
      answerBtn.classList.remove('game__correct-answer');
      answerBtn.classList.remove('game__wrong-answer');
    });
  }

  showResult() {
    const resultScreen = document.querySelector('.result');
    resultScreen.classList.remove('display-none');
    const gameScreen = document.querySelector('.game');
    gameScreen.classList.add('display-none');
    const header = document.querySelector('.header');
    header.classList.add('display-none');

    this.renderResult();
    this.muteSound();
  }

  renderResult() {
    this.displayEndPhrase();
    this.displayResultScores();
    this.displayAnswersStat();
  }

  displayResultScores() {
    const bestScoreScreen = document.querySelector('.result__best-score');
    const totalScoreScreen = document.querySelector('.result__total-score');

    totalScoreScreen.innerText = `Total score: ${
      this.controller.getResultData().score
    }`;

    bestScoreScreen.innerText = `Best score: ${
      this.controller.getResultData().bestScore
    }`;
  }

  displayAnswersStat() {
    const corectAnswerScreen = document.querySelector(
      '.result__correct-answer-amount'
    );
    const wrongAnswerScreen = document.querySelector(
      '.result__wrong-answer-amount'
    );

    corectAnswerScreen.innerText = `Correct answers: ${
      this.controller.getResultData().correctAnswer
    }`;
    wrongAnswerScreen.innerText = `Wrong answers: ${
      this.controller.getResultData().wrongAnswer
    }`;
  }

  displayEndPhrase() {
    const endPhraseText = document.querySelector('.result__end-phrase');

    if (this.controller.isNewBestScore()) {
      endPhraseText.innerText = 'Congratulations! You have a new best score!';
    } else {
      endPhraseText.innerText = "Don't worry! You can try again";
    }
  }

  playAudio() {
    this.deleteOldAudioTimer();
    this.startAudioTimer();

    if (this.questionAudioIndex >= 3) {
      this.questionAudioIndex = 1;
    } else {
      this.questionAudioIndex++;
    }

    if (this.isMuted) {
      this.muteSound();
    } else {
      this.playQuestionAudio();
    }
  }

  startAudioTimer() {
    this.currentAudioTime = -1;
    this.audioTimer = setInterval(() => {
      this.currentAudioTime++;
    }, 1000);
  }

  deleteOldAudioTimer() {
    clearInterval(this.audioTimer);
  }

  playQuestionAudio() {
    this.pauseOldAudio();

    const countdown = this.controller.getAnswerTime();

    this.questionAudios.forEach((questionAudio) => {
      const isCorrectAudio =
        questionAudio.questionIndex === this.questionAudioIndex &&
        questionAudio.countDown === countdown;

      if (isCorrectAudio) {
        questionAudio.soundtrack.currentTime = this.currentAudioTime;
        questionAudio.soundtrack.play();
      }
    });
  }

  pauseOldAudio() {
    const countdown = this.controller.getAnswerTime();

    this.questionAudios.forEach((questionAudio) => {
      const isOldAudio =
        questionAudio.questionIndex !== this.questionAudioIndex &&
        questionAudio.countDown === countdown;

      if (isOldAudio) {
        questionAudio.soundtrack.pause();
      }
    });
  }

  muteSound() {
    const countdown = this.controller.getAnswerTime();

    this.questionAudios.forEach((questionAudio) => {
      const isCorrectAudio =
        questionAudio.questionIndex === this.questionAudioIndex &&
        questionAudio.countDown === countdown;

      if (isCorrectAudio) {
        questionAudio.soundtrack.pause();
      }
    });
  }

  bindListeners() {
    const answerBtns = document.querySelectorAll('.game__answers-item');
    const restartBtn = document.querySelector('.result__game-restart');
    const volumeBtn = document.querySelector('.game__volume-btn');

    answerBtns.forEach((answerBtn) =>
      answerBtn.addEventListener('click', (e) => {
        this.onAnswerBtnClick(e);
      })
    );
    restartBtn.addEventListener('click', () => this.onRestartBtnClick());
    volumeBtn.addEventListener('click', () => this.onVolumeBtnClick());
  }
}

const quizModel = new QuizModel();
const quizController = new QuizController(quizModel);
const quizView = new QuizView(quizController);
