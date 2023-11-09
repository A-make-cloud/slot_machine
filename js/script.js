const parentLeft = document.getElementById('slide-left')
const parentMiddle = document.getElementById('slide-middle')
const parentRight = document.getElementById('slide-right')
const gameLeft = document.querySelector('.slide-left')
const gameMiddle = document.querySelector('.slide-middle')
const gameRight = document.querySelector('.slide-right')




const btnPlay = document.getElementById('btn-play')

let nbrDePartieJoue = document.getElementById('nbrDePartieJoue')
let scoreLooseG = document.getElementById('scoreLooseG')
let scoreWinP = document.getElementById('scoreWinP')

let scoreLooseP = document.getElementById('scoreLooseP')
let scoreP = document.getElementById('scoreP')


let nbL = 0
let nbM = 0
let nbR = 0
let nbrEssaiP = 0

function jouerEvent() {
    btnPlay.addEventListener('click', () => {
        jeuPartie()
        jeuTotal()
        imGame()
    })
}
jouerEvent()
let nbrScoreWinP = 0
let nbrScoreLooseP = 0

let nbrEssaiTotal = 0


let nbrEssaiG = 0



let nbrEssG10 = 0
let nbrPartieRestant = 0
let scoreTotalP = document.getElementById('scoreTotalP')
let nbrClic = document.getElementById('nbrClic')


function jeuPartie() {


    nbrEssaiP++

    if (nbrEssaiP < 11) {
        scoreTotalP.innerHTML = `<img src='./images/bar.png' width="20"/>Times Played <div class="result"> ${nbrEssaiP} </div> <div class=""> / 10</div>`
        nbrClic.innerHTML = ` <div class="clicHead"> ${nbrEssaiP} </div> <div class=""></div>`

    } else if (nbrEssaiP === 11) {

        nbrEssaiG++
        nbrScoreLooseP++

        scoreLooseP.innerHTML = `<img src='./images/bar.png' width="20"/>Lost
        Set <div class="result">  ${nbrScoreLooseP}</div> `
        nbrEssaiP = 0
    } else if (nbrEssaiP > 11) {
        imGame()

    }


}
let amountParty = 0
let scoreG = document.getElementById('scoreG')

function imGame() {
    let numL = Math.floor(Math.random() * 10)
    let numM = Math.floor(Math.random() * 10)
    let numR = Math.floor(Math.random() * 10)
    console.log('numL  ', numL);
    console.log(arrayImages[numL])
    let imgL = document.createElement('img')
    let imgM = document.createElement('img')
    let imgR = document.createElement('img')

    imgL.src = arrayImages[numL]
    imgM.src = arrayImages[numM]
    imgR.src = arrayImages[numR]

    gameLeft.append(imgL)
    gameMiddle.append(imgM)
    gameRight.append(imgR)


    imgL.style.transform = `translateY(-${nbL * 120}px)`;
    imgM.style.transform = `translateY(-${nbM * 120}px)`;
    imgR.style.transform = `translateY(-${nbR * 120}px)`;

    /*             egalite            */
    const scoreWinG = document.getElementById('scoreWinG')
    if (imgL.src === imgM.src && imgL.src === imgR.src) {
        amountParty += 10000
        console.log('win');

        nbrScoreWinP++
        nbrEssaiG += nbrScoreWinP
        let scoreWinP = document.getElementById('scoreWinP')
        let main = document.querySelector('main')
        let content1 = document.querySelector('.content1')
        let timerId = setTimeout(function jump() {

            main.classList.add('animDollar')
            timerId = setTimeout(jump, 0);
        }, 0);
        let stoptimer = setTimeout(function stopJump() {
            main.classList.remove('animDollar')

            content1.style.display = 'none'
            stoptimer = clearTimeout(stopJump, 10000);
        }, 10000);

        scoreWinG.innerHTML = `<img src='./images/bar.png' width="20"/>Balance <div class="result" style="width:150px;">$ ${amountParty} </div> `
        scoreWinP.innerHTML = `<img src='./images/bar.png' width="20"/>Set wons <div class="result">  ${nbrScoreWinP}</div> `
        scoreG.innerHTML = `<img src='./images/bar.png' width="20"/>Total  Won  <div class="result" style="width:150px;">$ ${amountParty} </div>`


    } else {
        console.log('lose');

    }
}


function jeuTotal() {


    if (nbrEssaiG < 5) {

        nbL++
        nbM++
        nbR++
        /* *************** affichage ok ************  */
        let toto = nbrEssG10
        nbrPartieRestant = parseInt(5 - toto)
        nbrPartieRestant = 4 - nbrEssaiG
        scoreLooseG.innerHTML = `<img src='./images/bar.png' width="20"/>Free Spins Left<div class="result">  ${nbrPartieRestant} </div>  `
        nbrDePartieJoue.innerHTML = `<img src='./images/bar.png' width="20"/>Set Played <span class="result">   ${nbrEssaiG}</span>  <div class=""> / 5</div>`
        if (amountParty == 0) {
            scoreWinG.innerHTML = `<img src='./images/bar.png' width="80px"/>Total Won  <div class="result" style="width:52px;">$ ${amountParty} </div>`

        } else if (amountParty == 5) {
            const jackpot = document.getElementById('jackpot')
            const jackpotH2 = document.getElementById('jackpoth2')
            const container = document.getElementById('container')
            container.style.display = 'none'
            jackpot.style.display = 'block'
            jackpotH2.style.display = 'block'

            function createMonnaie() {
                const monnaie = document.createElement('div');
                monnaie.classList.add('monnaie');
                monnaie.style.left = Math.random() * 100 + "vw";
                monnaie.animationDuration = Math.random() * 2 + 3 + "s";
                monnaie.innerHTML = '🪙';
                document.body.appendChild(monnaie);

                setTimeout(() => {
                    monnaie.remove();
                }, 5000);
            }

            setInterval(createMonnaie, 100);
        }
        else {
            scoreWinG.innerHTML = `<img src='./images/bar.png' width="20"/>Total  Won  <div class="result" style="width:150px;">$ ${amountParty} </div>`

        }
    } else {
        nbrDePartieJoue.innerHTML = `<img src='./images/bar.png' width="20"/>Game over <span class="result">${nbrEssaiG}</span> <div class="">  / 5</div>`
        const popup = document.getElementById('popup')
        popup.style.display = 'block'
        btnPlay.style.display = 'none'

        const btnCheck = document.querySelector('#fa-check')
        btnCheck.addEventListener('click', () => {
            popup.style.display = 'none'
            btnPlay.style.display = 'block'

        })

    }
}




