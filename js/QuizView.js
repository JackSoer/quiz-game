import HomeView from './HomeView.js';

export default class QuizView {
  constructor(controller) {
    this.controller = controller;
    this.mount();

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

  onMenuBtnClick() {
    const homeView = new HomeView();
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
    const titleScreen = document.querySelector('.header__quiz-category');

    titleScreen.innerText = this.controller.getTitle();
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
    const menuBtn = document.querySelector('.result__menu');

    answerBtns.forEach((answerBtn) =>
      answerBtn.addEventListener('click', (e) => {
        this.onAnswerBtnClick(e);
      })
    );
    restartBtn.addEventListener('click', () => this.onRestartBtnClick());
    volumeBtn.addEventListener('click', () => this.onVolumeBtnClick());
    menuBtn.addEventListener('click', () => this.onMenuBtnClick());
  }

  mount() {
    document.body.innerHTML = `<header class="header">
    <h2 class="header__score">
      Score: <span class="header__score-counter"></span>
    </h2>
    <div class="header__timer-category">
      <h1 class="header__quiz-category"></h1>
      <div class="header__game-timer">
        <img
          src="images/icons/timer-icon.svg"
          alt="Your image disappeared..."
          class="header__game-timer-item"
        />
        <p class="header__game-timer-number"></p>
      </div>
    </div>
    <h2 class="header__best-score">
      BS: <span class="header__best-score-counter"></span>
    </h2>
  </header>
  <main class="game">
    <div class="container flex-container">
      <div class="game__question-illustration">
        <img
          class="game__question-illustration-item"
          src=""
          alt="Your image disappeared..."
        />
      </div>
      <div class="game__extra-info">
        <h3 class="game__questions-counter"></h3>
        <button class="game__volume-btn">
          <div
            class="game__volume-btn-icon game__volume-btn-icon--muted"
          ></div>
        </button>
      </div>
      <h2 class="game__question"></h2>
      <div class="game__answers">
        <button class="game__answers-item"></button>
        <button class="game__answers-item"></button>
        <button class="game__answers-item"></button>
        <button class="game__answers-item"></button>
      </div>
    </div>
  </main>

  <div class="game__result result display-none">
      <h2 class="result__end-phrase"></h2>
      <h2 class="result__total-score"></h2>
      <h2 class="result__best-score"></h2>
      <h2 class="result__correct-answer-amount"></h2>
      <h2 class="result__wrong-answer-amount"></h2>
      <div class="result__btns">
        <button class="result__game-restart">Restart</button>
        <button class="result__menu">Menu</button>
      </div>
  </div>

  <audio
    src="audio/soundtracks/In Game Music (30 Second Countdown) 1_3.mp3"
    id="1q-countdown30s"
    type="audio/mpeg"
  ></audio>
  <audio
    src="audio/soundtracks/In Game Music (30 Second Countdown) 2_3.mp3"
    id="2q-countdown30s"
    type="audio/mpeg"
  ></audio>
  <audio
    src="audio/soundtracks/In Game Music (30 Second Countdown) 3_3.mp3"
    id="3q-countdown30s"
    type="audio/mpeg"
  ></audio>

  <audio
    src="audio/effects/mixkit-correct-answer-tone-2870.wav"
    id="correct-answer"
    type="audio/wav"
  ></audio>
  <audio
    src="audio/effects/wrong-answer-129254.mp3"
    id="wrong-answer"
    type="audio/mpeg"
  ></audio>`;
  }
}
