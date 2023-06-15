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
    console.log(event.target);
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
            console.log(clickCount);
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')
            console.log(clickCount);
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
                }, 1000)
            }
        }
    }

    const allMatchess = document.getElementsByClassName('card');
    // console.log(allMatchess);
    // console.log('onebyone', allMatchess[0] , allMatchess[1]);
    if(allMatchess[0].classList.contains('match') && allMatchess[1].classList.contains('match') && allMatchess[2].classList.contains('match')
    && allMatchess[3].classList.contains('match') && allMatchess[4].classList.contains('match') && allMatchess[5].classList.contains('match')
    && allMatchess[6].classList.contains('match') && allMatchess[7].classList.contains('match') && allMatchess[8].classList.contains('match')
    && allMatchess[9].classList.contains('match') && allMatchess[10].classList.contains('match') && allMatchess[11].classList.contains('match') ){
        console.log('object');
    }


    // const allMatches = document.querySelectorAll('.card');    
    // allMatches.forEach((item) => {
    //     console.log('card', item);
    //     // console.log(item.classList);
    //     if (item.classList.contains('match')) {
    //         console.log('Good job');
    //     }
    // })

})

// --




document.getElementById('reset').addEventListener('click', () => {
    window.location.reload();
})

