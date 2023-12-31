let cardArray = [
    {
        'name': 'CSS',
        'img': 'images/remove/n_css_logo-removebg-preview.png'
    },
    {
        'name': 'HTML',
        'img': 'images/remove/n_html_logo-removebg-preview.png'
    },
    {
        'name': 'jQuery',
        'img': 'images/remove/jquery_logo-removebg-preview.png'
    },
    {
        'name': 'JS',
        'img': 'images/remove/n_js_logo-removebg-preview.png'
    },
    {
        'name': 'Node',
        'img': 'images/remove/node_js-removebg-preview.png'
    },
    {
        'name': 'Python',
        'img': 'images/remove/python_logo-removebg-preview.png'
    },

]
console.log(cardArray);



let card_section = document.querySelector('#card_section');

const gameCard = cardArray.concat(cardArray);
console.log(gameCard);

let shuffleArray = Array.from(gameCard);
shuffleArray.sort(() => {
    return (
        0.5 - Math.random()
    )
})
console.log("abz", shuffleArray);

for (let i = 0; i < shuffleArray.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffleArray[i].name;
    // childDiv.style.background = `url(${shuffleArray[i].img}) no-repeat center center/cover`;

    const frontDiv = document.createElement('div');
    frontDiv.classList.add('frontCard');
    childDiv.appendChild(frontDiv)

    const backDiv = document.createElement('div');
    backDiv.classList.add('backCard')
    childDiv.appendChild(backDiv);

    backDiv.style.background = `url(${shuffleArray[i].img}) no-repeat center `;


    card_section.appendChild(childDiv);
}



// step 4

let clickCount = 0;
let firstCard = '';
let secondCard = '';
var wrongCounter = 0;
var chanceCount = 5;
var chance = document.querySelector('.chance');
let congrast = document.querySelector('.congrast');
let congimg = document.querySelector('.congimg');
let gameOverImg = document.querySelector('.gameOverImg');

const card_maches = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currEle) => {
        currEle.classList.add('match');
    })
}



// reset the game 
const reset_game = () => {
    clickCount = 0;
    firstCard = '';
    secondCard = '';

    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currEle) => {
        currEle.classList.remove('card_selected');
    })
}

card_section.addEventListener('click', (event) => {
    // console.log(event.target);
    let curCard = event.target;

    if (curCard.id === 'card_section') {
        return false;
    }

    clickCount++;
    if (clickCount < 3) {
        // curCard.classList.add('border')
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')
            // console.log(clickCount);
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')
            // console.log(clickCount);
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // curCard.classList.add('match');
                setTimeout(() => {
                    card_maches();
                    reset_game();
                }, 1000)
            } else {
                setTimeout(() => {
                    reset_game();
                    wrongCounter++;
                    console.log(wrongCounter);
                    if (wrongCounter > 4) {
                        card_section.style.display = "none";
                        congrast.style.display = 'block';
                        gameOverImg.style.display = 'block';
                        congimg.style.display = 'none'
                    }
                    chance.innerHTML = --chanceCount;
                    console.log(chanceCount);
                    // console.log('notmatch');
                }, 1000)
            }
        }
    }



    setTimeout(() => {

        const allcards = document.querySelectorAll('.card');
        for (let i = 0; i < allcards.length; i++) {
            if (allcards[i].classList.contains('match')) {
                const allMatches = document.querySelectorAll('.match');
                if (allcards.length == allMatches.length) {
                    console.log('Good job');
                    // alert("You Won The Game")
                    card_section.style.display = "none";
                    congrast.style.display = 'block';
                    congimg.style.display = 'block';
                    gameOverImg.style.display = 'none';
                    break;

                }
            }
        }
    }, 2000)


})



document.getElementById('reset').addEventListener('click', () => {
    window.location.reload();
})

