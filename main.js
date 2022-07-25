const imageOne = document.querySelector('#imageOne')
const imageTwo = document.querySelector('#imageTwo')
const imageThree = document.querySelector('#imageThree')
const imageFour = document.querySelector('#imageFour')


document.querySelector('#button-one').addEventListener('click', showImageOne)
document.querySelector('#button-two').addEventListener('click', showImageTwo)
document.querySelector('#button-three').addEventListener('click', showImageThree)
document.querySelector('#button-four').addEventListener('click', showImageFour)


function showImageOne() {
    imageOne.classList.remove('hidden') 
    imageTwo.classList.add('hidden') 
    imageThree.classList.add('hidden') 
    imageFour.classList.add('hidden') 
}

function showImageTwo() {
    imageOne.classList.add('hidden') 
    imageTwo.classList.remove('hidden') 
    imageThree.classList.add('hidden') 
    imageFour.classList.add('hidden') 
}

function showImageThree() {
    imageOne.classList.add('hidden') 
    imageTwo.classList.add('hidden') 
    imageThree.classList.remove('hidden') 
    imageFour.classList.add('hidden') 
}

function showImageFour() {
    imageOne.classList.add('hidden') 
    imageTwo.classList.add('hidden') 
    imageThree.classList.add('hidden') 
    imageFour.classList.remove('hidden') 
}


