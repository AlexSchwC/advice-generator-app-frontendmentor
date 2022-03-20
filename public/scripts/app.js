import { functions } from './functions.js'

const adviceText = document.querySelector('#advice-text')
const adviceID = document.querySelector('#advice-id')
const diceBtn = document.querySelector('#btn')

functions.getAdvice(adviceText, adviceID)
functions.disable2sec(diceBtn)

diceBtn.addEventListener('click', () => {functions.getAdvice(adviceText, adviceID)})

diceBtn.addEventListener('click', () => {functions.disable2sec(diceBtn)})


