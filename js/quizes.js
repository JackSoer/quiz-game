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
        questionImg: 'Harry vs Vold.webp',
        question: 'What spell did Harry use to kill Lord Voldemort?',
        answers: [
          { answer: 'Expelliarmus', isCorrect: true },
          { answer: 'Expecto Patronum', isCorrect: false },
          { answer: 'Avada Kedavra', isCorrect: false },
          { answer: 'Accio', isCorrect: false },
        ],
      },
      {
        id: 2,
        questionImg: 'draco.jpg',
        question:
          'At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?',
        answers: [
          { answer: 'Frog', isCorrect: false },
          { answer: 'Snake', isCorrect: true },
          { answer: 'Dragon', isCorrect: false },
          { answer: 'Bear', isCorrect: false },
        ],
      },
      {
        id: 3,
        questionImg: 'cat.jpg',
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
        questionImg: 'broke-bones.webp',
        question:
          'Gilderoy Lockhart tried to use ‘Brackium Emendo’ to fix Harry’s broken bones. What did it actually do to him?',
        answers: [
          { answer: 'Turned his leg wooden', isCorrect: false },
          { answer: 'Removed his bones entirely', isCorrect: true },
          { answer: 'Forced him to speak Parseltongue', isCorrect: false },
          { answer: 'Gave him an exquisite singing voice', isCorrect: false },
        ],
      },
      {
        id: 5,
        questionImg: 'Luna.jpg',
        question: 'Which Patronus belongs to Luna Lovegood?',
        answers: [
          { answer: 'Doe', isCorrect: false },
          { answer: 'Rabbit', isCorrect: true },
          { answer: 'Dog', isCorrect: false },
          { answer: 'Horse', isCorrect: false },
        ],
      },
      {
        id: 6,
        questionImg: 'book of spells.jpg',
        question:
          'Who wrote the 7-book series titled ‘The Standard Book of Spells’?',
        answers: [
          { answer: 'Kennilworthy Whisp', isCorrect: false },
          { answer: 'Rita Skeeter', isCorrect: false },
          { answer: 'Bathilda Bagshot', isCorrect: false },
          { answer: 'Miranda Goshawk', isCorrect: true },
        ],
      },
    ],
  },
  {
    category: 'Comics',
    title: 'Spider-man',
    answerTime: 30,
    questions: [
      {
        id: 1,
        questionImg: "spider-man's name.webp",
        question: "What is Spider-Man's real name?",
        answers: [
          { answer: 'Bruce Wayne', isCorrect: false },
          { answer: 'Peter Parker', isCorrect: true },
          { answer: 'Bruce Banner', isCorrect: false },
          { answer: 'Clark Kent', isCorrect: false },
        ],
      },
      {
        id: 2,
        questionImg: 'new-york.webp',
        question: 'Which city does Spider-Man protect from crime?',
        answers: [
          { answer: 'London', isCorrect: false },
          { answer: 'Los Angeles', isCorrect: false },
          { answer: 'Gotham City', isCorrect: false },
          { answer: 'New York City', isCorrect: true },
        ],
      },
      {
        id: 3,
        questionImg: 'spider-man-comics.webp',
        question: 'Who wrote the original Spider-Man comics?',
        answers: [
          { answer: 'J.K. Rowling', isCorrect: false },
          { answer: 'Walt Disney', isCorrect: false },
          { answer: 'Stan Lee', isCorrect: true },
          { answer: 'Matt Groening', isCorrect: false },
        ],
      },
      {
        id: 4,
        questionImg: "spider-man's-newspaper.webp",
        question:
          'Which newspaper did Peter Parker work for in the 2002 film Spider-Man? ',
        answers: [
          { answer: 'Daily Planet', isCorrect: false },
          { answer: 'Daily Bugle', isCorrect: true },
          { answer: 'Sunday Post', isCorrect: false },
          { answer: 'The New Yor Daily', isCorrect: false },
        ],
      },
      {
        id: 5,
        questionImg: "peter's-parents.webp",
        question: "What were the names of Peter Parker's parents?",
        answers: [
          { answer: 'Homer and Marge', isCorrect: false },
          { answer: 'Richard and Mary', isCorrect: true },
          { answer: 'Peter and Lois', isCorrect: false },
          { answer: 'Han and Leia', isCorrect: false },
        ],
      },
      {
        id: 6,
        questionImg: "spider-man's-speed.webp",
        question: 'What speed can Spider-Man reach?',
        answers: [
          { answer: '200 miles per hour', isCorrect: true },
          { answer: '100 miles per hour', isCorrect: false },
          { answer: '500 miles per hour', isCorrect: false },
          { answer: '700 miles per hour', isCorrect: false },
        ],
      },
      {
        id: 7,
        questionImg: "stan lee's inspired.webp",
        question: 'What inspired Stan Lee to create Spider-Man?',
        answers: [
          { answer: 'He saw a fly climb up a wall', isCorrect: true },
          {
            answer: 'He met a crime fighter called Man-Spider',
            isCorrect: false,
          },
          { answer: 'The idea came to him in a dream', isCorrect: false },
          { answer: 'He had a pet spider called Peter', isCorrect: false },
        ],
      },
    ],
  },
  {
    category: 'Films',
    title: 'Avatar',
    answerTime: 30,
    questions: [
      {
        id: 1,
        questionImg: 'avatar-system.webp',
        question:
          'True or False: Avatar takes place on a planet in the Alpha Centauri star system.',
        answers: [
          { answer: 'True', isCorrect: false },
          { answer: 'False', isCorrect: true },
        ],
      },
      {
        id: 2,
        questionImg: 'avatar-system.webp',
        question:
          'This lush CG land, which drove many viewers into a depression by dint of their inability to live there for real, is called _______.',
        answers: [
          { answer: 'Pangaea', isCorrect: false },
          { answer: 'Pandora', isCorrect: true },
          { answer: 'Batuu', isCorrect: false },
          { answer: 'Panthera', isCorrect: false },
        ],
      },
      {
        id: 3,
        questionImg: 'avatar-system.webp',
        question: 'The film takes place in the year ...',
        answers: [
          { answer: '2084', isCorrect: false },
          { answer: '2154', isCorrect: true },
          { answer: '2231', isCorrect: false },
          { answer: '2300', isCorrect: false },
        ],
      },
      {
        id: 4,
        questionImg: 'avatar-system.webp',
        question: 'The native humanoid aliens are called the ______.',
        answers: [
          { answer: "Na'boo", isCorrect: false },
          { answer: "Ra'vi", isCorrect: false },
          { answer: "Na'vi", isCorrect: true },
          { answer: "Na'tu'li", isCorrect: false },
        ],
      },
      {
        id: 5,
        questionImg: 'avatar-system.webp',
        question:
          'The story is from the perspective of an outsider, though. What’s the name of the main character?',
        answers: [
          { answer: 'Jim Scully', isCorrect: false },
          { answer: 'James P. "Sulley" Sullivan', isCorrect: false },
          { answer: 'Chesley "Sully" Sullenberger', isCorrect: false },
          { answer: 'Jake Sully', isCorrect: true },
        ],
      },
      {
        id: 6,
        questionImg: 'avatar-system.webp',
        question:
          'The Resources Development Administration has set up operations on the planet to mine a powerful substance called __________.',
        answers: [
          { answer: 'Adamantium', isCorrect: false },
          { answer: 'Unobtainium', isCorrect: true },
          { answer: 'Magufinium', isCorrect: false },
          { answer: 'Ethereum', isCorrect: false },
        ],
      },
      {
        id: 7,
        questionImg: 'avatar-system.webp',
        question:
          'In his new avatar body, our hero becomes bodyguard to scientist Dr. Grace Augustine, played by Sigourney Weaver. In one haunting mo-cap scene, Grace’s avatar plays basketball in a crop top for ____.',
        answers: [
          { answer: 'MIT', isCorrect: false },
          {
            answer: 'Harvard',
            isCorrect: false,
          },
          { answer: 'Berkeley', isCorrect: false },
          { answer: 'Stanford', isCorrect: true },
        ],
      },
      {
        id: 8,
        questionImg: 'avatar-system.webp',
        question:
          'Our hero meets Neytiri, played by Zoe Saldaña, when she saves him from ...',
        answers: [
          { answer: 'A direhorse attack', isCorrect: false },
          {
            answer: 'A leonopteryx attack',
            isCorrect: false,
          },
          { answer: 'A viperwolf attack', isCorrect: true },
          { answer: 'A saberhog attack', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizes;
