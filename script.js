let computerGuesses = ['<i class="rock fa-regular fa-hand-back-fist"></i>',
                       '<i class="paper fa-regular fa-hand"></i>',
                       '<i class="scissor fa-regular fa-hand-scissors"></i>']
let userguesses = document.querySelectorAll('.user-font-wrapper i')
let userChoose = document.querySelector('.user-choose')
let computerChoose = document.querySelector('.computer-choose')
let winner = document.querySelector('.winner')
let useScore = document.querySelector('.user-score')
let computerScore = document.querySelector('.computer-score')
let score1 = 0
let score2 = 0

userguesses.forEach((guess) => {
    guess.addEventListener('click', (e)=>{
    let random = computerGuesses[Math.floor(Math.random()*computerGuesses.length)]
    // console.log(e.target.classList[0] = 'rock')
    console.log(random)
    // console.log(e.target.classList[0])
    if (e.target.classList[0] == 'rock' ) {
        userChoose.innerHTML = `<i class="rock fa-regular fa-hand-back-fist fa-flip-horizontal"></i>`
        computerChoose.innerHTML = `${random}`
        // console.log(random.includes('rock'))
        if (random.includes('rock')) {
            winner.innerText = 'Even Result'
        }else if (random.includes('paper')) {
            winner.innerText = 'Computer Wins'
            score2 += 1
            computerScore.innerHTML = `${score2}`
        }else if (random.includes('scissor')) {
            winner.innerText = 'Computer Loses'
            score1 +=1
            useScore.innerHTML = `${score1}`
        }
    }else if (e.target.classList[0] == 'paper') {
        userChoose.innerHTML = `<i class="paper fa-regular fa-hand fa-flip-horizontal"></i>`
        computerChoose.innerHTML = `${random}`
        if (random.includes('paper')) {
            winner.innerText = 'Even Result'
        }else if (random.includes('scissor')) {
            winner.innerText = 'Computer Wins'
            score2 += 1
            computerScore.innerHTML = `${score2}`
        }else if (random.includes('rock')) {
            winner.innerText = 'Computer Loses'
            score1 +=1
            useScore.innerHTML = `${score1}`
        }

    }else if (e.target.classList[0] =='scissor') {
        userChoose.innerHTML = `<i class="scissor fa-regular fa-hand-scissors fa-flip-horizontal"></i>`
        computerChoose.innerHTML = `${random}`
        if (random.includes('scissor')) {
            winner.innerText = 'Even Result'
        }else if (random.includes('rock')) {
            winner.innerText = 'Computer Wins'
            score2 += 1
            computerScore.innerHTML = `${score2}`
        }else if (random.includes('paper')) {
            winner.innerText = 'Computer Loses'
            score1 +=1
            useScore.innerHTML = `${score1}`
        }
    }
    })
})