const quizes = [
  {
    category: 'Comics',
    title: 'Marvel & DC',
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
        question: 'Which Avenger is the only one who could calm the Hulk down?',
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
      {
        id: 9,
        questionImg: 'iron-man.jpg',
        question:
          'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?',
        answers: [
          { answer: '2005', isCorrect: false },
          { answer: '2008', isCorrect: true },
          { answer: '2010', isCorrect: false },
          { answer: '2012', isCorrect: false },
        ],
      },
      {
        id: 10,
        questionImg: 'mjolnir.avif',
        question: 'What is the name of Thor’s hammer?',
        answers: [
          { answer: 'Vanir', isCorrect: false },
          { answer: 'Aesir', isCorrect: false },
          { answer: 'Mjolnir', isCorrect: true },
          { answer: 'Norn', isCorrect: false },
        ],
      },
    ],
  },
  {
    category: 'Films',
    title: 'Harry Potter',
    answerTime: 30,
    questions: [
      {
        id: 1,
        questionImg: '1q.jpg',
        question: 'What spell did Harry use to kill Lord Voldemort?',
        answers: [
          { answer: 'Expelliarmus', isCorrect: false },
          { answer: 'Expecto Patronum', isCorrect: false },
          { answer: 'Avada Kedavra', isCorrect: false },
          { answer: 'Accio', isCorrect: true },
        ],
      },
      {
        id: 2,
        questionImg: '2q.png',
        question:
          'At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?',
        answers: [
          { answer: 'Frog', isCorrect: true },
          { answer: 'Snake', isCorrect: false },
          { answer: 'Dragon', isCorrect: false },
          { answer: 'Bear', isCorrect: false },
        ],
      },
      {
        id: 3,
        questionImg: '3q.webp',
        question: 'The ‘Felifors’ spell turns a cat into a what?',
        answers: [
          { answer: 'Hat', isCorrect: false },
          { answer: 'Bat', isCorrect: false },
          { answer: 'Matchbox', isCorrect: false },
          { answer: 'Cauldron', isCorrect: true },
        ],
      },
      {
        id: 4,
        questionImg: '4q.webp',
        question:
          'Gilderoy Lockhart tried to use ‘Brackium Emendo’ to fix Harry’s broken bones. What did it actually do to him?',
        answers: [
          { answer: 'Turned his leg wooden', isCorrect: false },
          { answer: 'Removed his bones entirely', isCorrect: true },
          { answer: 'Forced him to speak Parseltongue', isCorrect: false },
          { answer: 'Gave him an exquisite singing voice', isCorrect: true },
        ],
      },
      {
        id: 5,
        questionImg: '5q.jpeg',
        question: 'Which Patronus belongs to Luna Lovegood?',
        answers: [
          { answer: 'Doe', isCorrect: false },
          { answer: 'Rabbit', isCorrect: false },
          { answer: 'Dog', isCorrect: true },
          { answer: 'Horse', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizes;
