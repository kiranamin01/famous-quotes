//  Famous Person Quote taken from web

const quotes = [
    {
      id: 1,
      name: 'Nelson Mandela',
      job: 'Former President of South Africa      ',
      img: 'images/famous-quote-images/download.jpeg',
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      id: 2,
      name: 'Walt Disney',
      job: 'American animation film producer',
      img: 'images/famous-quote-images/download (.jpeg',
      text: 'The way to get started is to quit talking and begin doing',
    },
    {
        id: 3,
        name: 'Steve Jobs',
        job: 'American business magnate',
        img: 'images/famous-quote-images/stevejobs.jpeg',
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking",
    },
    {
        id: 4,
        name: 'Eleanor Roosevelt',
        job: 'Former First Lady of the United States        ',
        img: 'images/famous-quote-images/Elenor Roosevelt.jpeg',
        text: 'If life were predictable it would cease to be life, and be without flavor. ',
    },
    {
        id: 5,
        name: 'Oprah Winfrey',
        job: 'American host',
        img:'images/famous-quote-images/Oprah Winfrey.jpeg',
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    },
    {
        id: 6,
        name: 'John Lennon',
        job: 'Singer-songwriter',
        img: 'images/famous-quote-images/John Lennon.jpeg',
        text: "Life is what happens when you're busy making other plans",
    },
    {
          id: 7,
          name: 'Helen Keller',
          job: 'American author',
          img: 'images/famous-quote-images/Helen Keller.jpeg',
          text: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart',
    },
    {
          id: 8,
          name: 'Maya Angelou',
          job: 'American memoirist          ',
          img: 'images/famous-quote-images/Maya Angelou.jpeg',
          text: 'You will face many defeats in life, but never let yourself be defeated',
    },
    {
            id: 9,
            name: 'James Cameron',
            job: 'Canadian filmmaker',
            img: 'images/famous-quote-images/James Cameron.jpeg',
            text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },   
    {
            id: 10,
            name: 'Aristotle',
            job: 'Greek philosopher',
            img: 'images/famous-quote-images/Aristotle.jpeg',
            text: 'It is during our darkest moments that we must focus to see the light',
    },

  ];

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');  


  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

// set starting person list
let currentList = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = quotes[currentList];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = quotes[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentList++;
    if (currentList > quotes.length - 1) {
      currentList = 0;
    }
    showPerson(currentList);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentList--;
    if (currentList < 0) {
      currentList = quotes.length - 1;
    }
    showPerson(currentList);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
  
    currentList = Math.floor(Math.random() * quotes.length);
    showPerson(currentList);
  });
  
 