const inital = document.querySelector('.start');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
let game = false;
let newV = "";
let randomV = "";

const words = ['JavaScript', 'Html','Css','React Js','Android', 'Laptop', 'Science', 'Engineer','Linux', 'Aws', 'Azure', 'Webdesiginer', 'Developer', 'Javascript', 'HTML', 'Game','Computer','Programming','Text','Fetch','Window','Operating System','Cloud Computing','Anglar JS','C++','C','Python','GO','Ruby','Perl','Shift','React Native','Flutter','Solar'];

const createWords = () => {
    let number = Math.floor(Math.random() * words.length);
    let random = words[number];
    // console.log(random.split(""));
    return random;
}

const jumbleWord = (el) => {
    for (let i = el.length - 1; i >= 0; i--) {
        let temp = el[i];
        let j = Math.floor(Math.random() * (i + 1));
        el[i] = el[j];
        el[j] = temp;

    }
    return el.join("");


}

btn.addEventListener('click', function () {
    if (!game) {
        game = true;
        inital.style.color = 'darkred';

        btn.textContent = 'Guess Word';
        guess.classList.toggle('hidden');
        newV = createWords();
        randomV = jumbleWord(newV.split(""));
        console.log(randomV);
        inital.innerHTML = 'Arrange the word \'' + randomV + '\'';

    } else {

        let inputWord = guess.value;
        if (inputWord === newV) {
            console.log('correct');
            game = false;
            inital.innerHTML = `Awesome!It's correct.\n
                          It is ${newV}`;
            inital.style.color = 'darkviolet';
            sc += 5;
            score.innerHTML = sc;
            guess.classList.toggle('hidden');
            btn.innerHTML = 'start again';
            guess.value = "";

        } else {
            console.log('incorrect');
            inital.innerHTML = `Better luck next time.Try Again! '${randomV}'`;
            inital.style.color = 'red';
            btn.innerHTML = 'Again';
            guess.value = "";
            guess.classList.toggle('hidden');
        }

    }
})