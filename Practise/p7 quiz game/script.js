const questions = [
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "Berlin", "Madrid", "Rome"],
        "answer": "Paris"
    },
    {
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "options": ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        "answer": "Harper Lee"
    },
    {
        "question": "What is the boiling point of water in Celsius?",
        "options": ["90°C", "100°C", "110°C", "120°C"],
        "answer": "100°C"
    },
    {
        "question": "What element does 'O' represent on the periodic table?",
        "options": ["Oxygen", "Gold", "Silver", "Iron"],
        "answer": "Oxygen"
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Platinum"],
        "answer": "Diamond"
    },
    {
        "question": "In which country would you find the Eiffel Tower?",
        "options": ["France", "Germany", "Spain", "Italy"],
        "answer": "France"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Fe", "Pb"],
        "answer": "Au"
    },
    {
        "question": "Which planet is closest to the Sun?",
        "options": ["Venus", "Earth", "Mercury", "Mars"],
        "answer": "Mercury"
    },
    {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"],
        "answer": "7"
    },
    {
        "question": "What is the smallest prime number?",
        "options": ["0", "1", "2", "3"],
        "answer": "2"
    },
    {
        "question": "Which animal is known as the 'King of the Jungle'?",
        "options": ["Elephant", "Tiger", "Lion", "Bear"],
        "answer": "Lion"
    },
    {
        "question": "What gas do plants use for photosynthesis?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        "answer": "Carbon Dioxide"
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "South Korea", "Thailand"],
        "answer": "Japan"
    },
    {
        "question": "What is the longest river in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "answer": "Nile River"
    },
    {
        "question": "What is the capital city of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "answer": "Canberra"
    },
    {
        "question": "Which planet is known as the Gas Giant?",
        "options": ["Venus", "Earth", "Jupiter", "Mars"],
        "answer": "Jupiter"
    },
    {
        "question": "How many states are there in the United States?",
        "options": ["48", "49", "50", "51"],
        "answer": "50"
    },
    {
        "question": "Which element has the atomic number 1?",
        "options": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "answer": "Hydrogen"
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        "answer": "Blue Whale"
    },
    {
        "question": "Who was the first President of the United States?",
        "options": ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        "answer": "George Washington"
    },
    {
        "question": "What is the square root of 64?",
        "options": ["6", "7", "8", "9"],
        "answer": "8"
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "options": ["Tomato", "Avocado", "Pepper", "Onion"],
        "answer": "Avocado"
    },
    {
        "question": "Which language is known as the 'Language of Love'?",
        "options": ["Spanish", "Italian", "French", "German"],
        "answer": "French"
    },
    {
        "question": "Who wrote '1984'?",
        "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        "answer": "George Orwell"
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": ["H2O", "CO2", "O2", "NaCl"],
        "answer": "H2O"
    },
    {
        "question": "Which ocean is the largest?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "Which country is known for inventing pizza?",
        "options": ["France", "Italy", "Greece", "Turkey"],
        "answer": "Italy"
    },
    {
        "question": "How many planets are in our Solar System?",
        "options": ["7", "8", "9", "10"],
        "answer": "8"
    },
    {
        "question": "What is the currency used in Japan?",
        "options": ["Yuan", "Won", "Yen", "Ringgit"],
        "answer": "Yen"
    },
    {
        "question": "What is the speed of light?",
        "options": ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        "answer": "300,000 km/s"
    },
    {
        "question": "Who was the first man to walk on the Moon?",
        "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        "answer": "Neil Armstrong"
    },
    {
        "question": "Which city is known as the Big Apple?",
        "options": ["Los Angeles", "Chicago", "New York", "San Francisco"],
        "answer": "New York"
    },
    {
        "question": "What is the smallest country in the world?",
        "options": ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        "answer": "Vatican City"
    },
    {
        "question": "What is the chemical symbol for sodium?",
        "options": ["Na", "N", "S", "So"],
        "answer": "Na"
    },
    {
        "question": "Who is known as the Father of Computers?",
        "options": ["Charles Babbage", "Alan Turing", "Ada Lovelace", "John von Neumann"],
        "answer": "Charles Babbage"
    },
    {
        "question": "What is the longest river in Africa?",
        "options": ["Nile", "Congo", "Zambezi", "Niger"],
        "answer": "Nile"
    },
    {
        "question": "Which planet is known for its rings?",
        "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "answer": "Saturn"
    },
    {
        "question": "What is the chemical symbol for silver?",
        "options": ["Si", "Ag", "Au", "Pb"],
        "answer": "Ag"
    },
    {
        "question": "Who painted the Sistine Chapel ceiling?",
        "options": ["Leonardo da Vinci", "Vincent Van Gogh", "Michelangelo", "Raphael"],
        "answer": "Michelangelo"
    },
    {
        "question": "What is the currency of the United Kingdom?",
        "options": ["Dollar", "Euro", "Pound", "Yen"],
        "answer": "Pound"
    },
    {
        "question": "How many bones are there in the adult human body?",
        "options": ["206", "205", "207", "208"],
        "answer": "206"
    },
    {
        "question": "What is the capital of Canada?",
        "options": ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        "answer": "Ottawa"
    },
    {
        "question": "What is the chemical symbol for potassium?",
        "options": ["P", "K", "Po", "Pt"],
        "answer": "K"
    },
    {
        "question": "Which is the hottest planet in our Solar System?",
        "options": ["Mercury", "Venus", "Earth", "Mars"],
        "answer": "Venus"
    },
    {
        "question": "What is the smallest bone in the human body?",
        "options": ["Stapes", "Incus", "Malleus", "Femur"],
        "answer": "Stapes"
    },
    {
        "question": "What is the capital of Italy?",
        "options": ["Rome", "Venice", "Milan", "Florence"],
        "answer": "Rome"
    },
    {
        "question": "What is the speed of sound in air?",
        "options": ["340 m/s", "300 m/s", "350 m/s", "400 m/s"],
        "answer": "340 m/s"
    },
    {
        "question": "Who invented the lightbulb?",
        "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"],
        "answer": "Thomas Edison"
    },
    {
        "question": "Which ocean is located between Africa and Australia?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "answer": "Indian Ocean"
    },
    {
        "question": "What is the chemical symbol for lead?",
        "options": ["Pb", "Pd", "Pt", "Pa"],
        "answer": "Pb"
    },
    {
        "question": "What is the largest desert in the world?",
        "options": ["Sahara", "Arabian", "Gobi", "Antarctic"],
        "answer": "Antarctic"
    },
    {
        "question": "What is the tallest mountain in the world?",
        "options": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        "answer": "Mount Everest"
    },
    {
        "question": "Which planet is known as the Earth's twin?",
        "options": ["Venus", "Mars", "Mercury", "Uranus"],
        "answer": "Venus"
    },
    {
        "question": "What is the capital of Germany?",
        "options": ["Berlin", "Munich", "Hamburg", "Frankfurt"],
        "answer": "Berlin"
    },
    {
        "question": "Which is the largest land animal?",
        "options": ["Elephant", "Rhinoceros", "Giraffe", "Hippo"],
        "answer": "Elephant"
    },
    {
        "question": "Which planet has the most moons?",
        "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "answer": "Saturn"
    },
    {
        "question": "What is the most abundant gas in the Earth's atmosphere?",
        "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        "answer": "Nitrogen"
    },
    {
        "question": "Who is the author of 'Pride and Prejudice'?",
        "options": ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Mary Shelley"],
        "answer": "Jane Austen"
    },
    {
        "question": "What is the capital of Brazil?",
        "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        "answer": "Brasília"
    },
    {
        "question": "What is the largest island in the world?",
        "options": ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        "answer": "Greenland"
    },
    {
        "question": "Which planet is known as the 'Evening Star'?",
        "options": ["Venus", "Mars", "Saturn", "Jupiter"],
        "answer": "Venus"
    },
    {
        "question": "Who discovered penicillin?",
        "options": ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
        "answer": "Alexander Fleming"
    },
    {
        "question": "Which city is famous for its canals?",
        "options": ["Amsterdam", "Venice", "Stockholm", "London"],
        "answer": "Venice"
    },
    {
        "question": "What is the largest country in the world by land area?",
        "options": ["China", "United States", "Canada", "Russia"],
        "answer": "Russia"
    },
    {
        "question": "What is the primary ingredient in traditional Japanese sushi?",
        "options": ["Rice", "Noodles", "Fish", "Seaweed"],
        "answer": "Rice"
    },
    {
        "question": "Who was the 16th President of the United States?",
        "options": ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Theodore Roosevelt"],
        "answer": "Abraham Lincoln"
    },
    {
        "question": "Which animal is known as the largest land predator?",
        "options": ["Polar Bear", "Grizzly Bear", "Lion", "Tiger"],
        "answer": "Polar Bear"
    },
    {
        "question": "Which planet is known for its Great Red Spot?",
        "options": ["Jupiter", "Mars", "Saturn", "Uranus"],
        "answer": "Jupiter"
    },
    {
        "question": "What is the most common element in the universe?",
        "options": ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
        "answer": "Hydrogen"
    },
    {
        "question": "Who painted 'The Starry Night'?",
        "options": ["Pablo Picasso", "Vincent Van Gogh", "Claude Monet", "Paul Cézanne"],
        "answer": "Vincent Van Gogh"
    },
    {
        "question": "What is the capital of Spain?",
        "options": ["Madrid", "Barcelona", "Seville", "Valencia"],
        "answer": "Madrid"
    },
    {
        "question": "Which sea is known for being the saltiest?",
        "options": ["Red Sea", "Caspian Sea", "Mediterranean Sea", "Dead Sea"],
        "answer": "Dead Sea"
    },
    {
        "question": "Who wrote 'The Great Gatsby'?",
        "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        "answer": "F. Scott Fitzgerald"
    },
    {
        "question": "What is the chemical symbol for iron?",
        "options": ["Fe", "Ir", "I", "In"],
        "answer": "Fe"
    },
    {
        "question": "Which country is known for the tulip flower?",
        "options": ["Netherlands", "Belgium", "France", "Germany"],
        "answer": "Netherlands"
    },
    {
        "question": "Which animal is known for its black and white stripes?",
        "options": ["Lion", "Zebra", "Tiger", "Giraffe"],
        "answer": "Zebra"
    },
    {
        "question": "Who was the Greek goddess of wisdom?",
        "options": ["Hera", "Athena", "Aphrodite", "Demeter"],
        "answer": "Athena"
    },
    {
        "question": "What is the capital of India?",
        "options": ["New Delhi", "Mumbai", "Kolkata", "Bangalore"],
        "answer": "New Delhi"
    },
    {
        "question": "Which is the most spoken language in the world?",
        "options": ["English", "Spanish", "Mandarin", "Hindi"],
        "answer": "Mandarin"
    },
    {
        "question": "What is the capital of Egypt?",
        "options": ["Cairo", "Alexandria", "Luxor", "Giza"],
        "answer": "Cairo"
    },
    {
        "question": "Which animal is known for its ability to change color?",
        "options": ["Chameleon", "Octopus", "Squid", "All of the above"],
        "answer": "All of the above"
    },
    {
        "question": "Who wrote 'The Catcher in the Rye'?",
        "options": ["J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald", "John Steinbeck"],
        "answer": "J.D. Salinger"
    },
    {
        "question": "What is the capital of Argentina?",
        "options": ["Buenos Aires", "Santiago", "Montevideo", "Lima"],
        "answer": "Buenos Aires"
    },
    {
        "question": "Which planet is known for its tilt and extreme seasons?",
        "options": ["Neptune", "Uranus", "Saturn", "Mars"],
        "answer": "Uranus"
    },
    {
        "question": "Who discovered the law of gravitation?",
        "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
        "answer": "Isaac Newton"
    },
    {
        "question": "What is the largest volcano in the world?",
        "options": ["Mount Fuji", "Mount Kilimanjaro", "Mauna Loa", "Mount St. Helens"],
        "answer": "Mauna Loa"
    },
    {
        "question": "Which composer wrote 'The Four Seasons'?",
        "options": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Johann Sebastian Bach"],
        "answer": "Antonio Vivaldi"
    },
    {
        "question": "What is the chemical symbol for copper?",
        "options": ["Co", "Cu", "Cp", "Cr"],
        "answer": "Cu"
    },
    {
        "question": "Who is known as the 'Father of Modern Physics'?",
        "options": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        "answer": "Albert Einstein"
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Platinum"],
        "answer": "Diamond"
    },
    {
        "question": "What is the capital of Norway?",
        "options": ["Stockholm", "Copenhagen", "Oslo", "Helsinki"],
        "answer": "Oslo"
    },
    {
        "question": "Which element is known for its use in nuclear reactors?",
        "options": ["Uranium", "Plutonium", "Thorium", "Radon"],
        "answer": "Uranium"
    },
    {
        "question": "What is the capital of South Korea?",
        "options": ["Seoul", "Busan", "Incheon", "Gwangju"],
        "answer": "Seoul"
    },
    {
        "question": "What is the main ingredient in traditional Greek salad?",
        "options": ["Tomato", "Cucumber", "Feta cheese", "Olive oil"],
        "answer": "Feta cheese"
    },
    {
        "question": "Which planet is known as the 'Morning Star'?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "answer": "Venus"
    },
    {
        "question": "Who was the first woman to win a Nobel Prize?",
        "options": ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        "answer": "Marie Curie"
    },
    {
        "question": "Which ancient civilization built the pyramids of Giza?",
        "options": ["Mesopotamians", "Egyptians", "Mayans", "Aztecs"],
        "answer": "Egyptians"
    },
    {
        "question": "What is the capital of Sweden?",
        "options": ["Stockholm", "Oslo", "Helsinki", "Copenhagen"],
        "answer": "Stockholm"
    },
    {
        "question": "Who was the author of 'Brave New World'?",
        "options": ["Aldous Huxley", "George Orwell", "H.G. Wells", "Ray Bradbury"],
        "answer": "Aldous Huxley"
    },
    {
        "question": "Which ocean is the smallest?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Arctic Ocean"
    },
    {
        "question": "What is the chemical symbol for chlorine?",
        "options": ["Cl", "Ch", "Co", "Cr"],
        "answer": "Cl"
    },
    {
        "question": "Which planet is known as the 'Ice Giant'?",
        "options": ["Uranus", "Neptune", "Saturn", "Mars"],
        "answer": "Uranus"
    },
    {
        "question": "What is the largest city in the United States by population?",
        "options": ["New York City", "Los Angeles", "Chicago", "Houston"],
        "answer": "New York City"
    },
    {
        "question": "What is the smallest country in Africa?",
        "options": ["Gambia", "Burundi", "Lesotho", "Swaziland"],
        "answer": "Gambia"
    },
    {
        "question": "What is the hardest substance found in the human body?",
        "options": ["Bone", "Teeth", "Hair", "Nails"],
        "answer": "Teeth"
    },
    {
        "question": "What is the chemical symbol for mercury?",
        "options": ["Hg", "Mn", "Me", "Mr"],
        "answer": "Hg"
    },
    {
        "question": "Who was the 7th President of the United States?",
        "options": ["Andrew Jackson", "Martin Van Buren", "James K. Polk", "John Tyler"],
        "answer": "Andrew Jackson"
    },
    {
        "question": "Which country is known for having a maple leaf on its flag?",
        "options": ["Canada", "United States", "Australia", "New Zealand"],
        "answer": "Canada"
    },
    {
        "question": "What is the currency used in Mexico?",
        "options": ["Peso", "Dollar", "Euro", "Yen"],
        "answer": "Peso"
    },
    {
        "question": "Which planet is known for its great storms?",
        "options": ["Jupiter", "Mars", "Neptune", "Saturn"],
        "answer": "Jupiter"
    },
    {
        "question": "What is the chemical symbol for magnesium?",
        "options": ["Mg", "Mn", "M", "Mg"],
        "answer": "Mg"
    },
    {
        "question": "Who discovered America in 1492?",
        "options": ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "Hernán Cortés"],
        "answer": "Christopher Columbus"
    },
    {
        "question": "What is the capital of Thailand?",
        "options": ["Bangkok", "Hanoi", "Kuala Lumpur", "Manila"],
        "answer": "Bangkok"
    },
    {
        "question": "Which bird is known for its colorful plumage and ability to mimic sounds?",
        "options": ["Parrot", "Peacock", "Eagle", "Sparrow"],
        "answer": "Parrot"
    },
    {
        "question": "What is the chemical symbol for zinc?",
        "options": ["Zn", "Zi", "Zc", "Ze"],
        "answer": "Zn"
    },
    {
        "question": "Which is the smallest planet in our Solar System?",
        "options": ["Mercury", "Mars", "Venus", "Earth"],
        "answer": "Mercury"
    },
    {
        "question": "Who was the first manned mission to the Moon?",
        "options": ["Apollo 11", "Apollo 12", "Apollo 13", "Apollo 14"],
        "answer": "Apollo 11"
    },
    {
        "question": "What is the capital of Turkey?",
        "options": ["Istanbul", "Ankara", "Izmir", "Antalya"],
        "answer": "Ankara"
    },
    {
        "question": "Which ancient civilization is known for building the Machu Picchu?",
        "options": ["Inca", "Maya", "Aztec", "Roman"],
        "answer": "Inca"
    },
    {
        "question": "Who is known for the theory of relativity?",
        "options": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        "answer": "Albert Einstein"
    },
    {
        "question": "What is the chemical symbol for platinum?",
        "options": ["Pt", "Pl", "Pn", "Pt"],
        "answer": "Pt"
    },
    {
        "question": "Which country is known as the Land of the Midnight Sun?",
        "options": ["Sweden", "Norway", "Finland", "Denmark"],
        "answer": "Norway"
    },
    {
        "question": "What is the currency used in South Africa?",
        "options": ["Rand", "Pound", "Dollar", "Euro"],
        "answer": "Rand"
    },
    {
        "question": "Which planet has the longest day?",
        "options": ["Mercury", "Venus", "Mars", "Jupiter"],
        "answer": "Venus"
    },
    {
        "question": "Who wrote 'The Lord of the Rings'?",
        "options": ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        "answer": "J.R.R. Tolkien"
    },
    {
        "question": "What is the most common blood type?",
        "options": ["A", "B", "AB", "O"],
        "answer": "O"
    },
    {
        "question": "What is the hardest natural material on Earth?",
        "options": ["Gold", "Diamond", "Iron", "Platinum"],
        "answer": "Diamond"
    }
]

const body = document.querySelector("body");
const result = document.getElementById("result");
const question = document.getElementById("question");
const option1 = document.getElementById("opetion1");
const option2 = document.getElementById("opetion2");
const option3 = document.getElementById("opetion3");
const option4 = document.getElementById("opetion4");
const skip = document.getElementById("skip");
let count = 0;
let questionNumber = [];
let points = 0;
const point = document.getElementById("point");
point.innerText = points

function load() {
    let number = parseInt(Math.random() * questions.length)
    questionNumber.push(number);
    question.innerText = `${questions[number].question}`
    option1.value = `${questions[number].options[0]}`
    option2.value = `${questions[number].options[1]}`
    option3.value = `${questions[number].options[2]}`
    option4.value = `${questions[number].options[3]}`
    count++;
    console.log(questionNumber);

}

skip.addEventListener("click", () => {
    let number = parseInt(Math.random() * questions.length);
    while (number in questionNumber) {
        number = parseInt(Math.random() * questions.length);
    }
    questionNumber.push(number);
    question.innerText = `${questions[number].question}`
    option1.value = `${questions[number].options[0]}`
    option2.value = `${questions[number].options[1]}`
    option3.value = `${questions[number].options[2]}`
    option4.value = `${questions[number].options[3]}`
    count++;
    console.log(questionNumber);
})

function checkAnswer(value) {
    if (value !== questions[questionNumber[count - 1]].answer) {
        result.style.color = "red";
        result.innerText = `Wrong Answer \nCorrect Answer is ${questions[questionNumber[count - 1]].answer}`
        body.style.backgroundColor = "red"
        setTimeout(() => {
            let number = parseInt(Math.random() * questions.length)
            while (number in questionNumber) {
                number = parseInt(Math.random() * questions.length);
            }
            questionNumber.push(number);
            question.innerText = `${questions[number].question}`
            option1.value = `${questions[number].options[0]}`
            option2.value = `${questions[number].options[1]}`
            option3.value = `${questions[number].options[2]}`
            option4.value = `${questions[number].options[3]}`
            count++;
            result.innerText = ""
            body.style.backgroundColor = "white"
        }, 1500);
        point.innerText = `${parseInt(point.innerText) - 1} `
    }
    else {
        result.style.color = "green";
        result.innerText = "Correct Answer"
        body.style.backgroundColor = "green"
        setTimeout(() => {
            let number = parseInt(Math.random() * questions.length)
            while (number in questionNumber) {
                number = parseInt(Math.random() * questions.length);
            }
            questionNumber.push(number);
            question.innerText = `${questions[number].question}`
            option1.value = `${questions[number].options[0]}`
            option2.value = `${questions[number].options[1]}`
            option3.value = `${questions[number].options[2]}`
            option4.value = `${questions[number].options[3]}`
            count++;
            result.innerText = ""
            body.style.backgroundColor = "white"
        }, 1000);
        point.innerText = `${parseInt(point.innerText) + 1}`
    }

    console.log(questionNumber);
}