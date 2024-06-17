

let firstNumber;
let secondNumber;
let operator;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display')
const numberElement = document.querySelectorAll('.number')
const operatorElement = document.querySelectorAll('.operator')
const equalsElement = document.querySelector('.equals')
const clearElement = document.querySelector('.clear')
/*----------------------------- Event Listeners -----------------------------*/
const numberClick = (evt) => {
    const number = evt.target.innerText
    displayElement.innerText += number
}
const operatorclick = (evt) => {
    operator = evt.target.dataset.operator
    firstNumber = parseInt(displayElement.innerText)
    displayElement.innerText = ''

}
const equalsClick = () => {

    secondNumber = displayElement.innerText

    if(operator === 'add') {
        displayElement.innerText = firstNumber + secondNumber
    } else if (operator === 'subtract'){
        displayElement.innerText = firstNumber - secondNumber
    } else if (operator === 'multiply'){
        displayElement.innerText = firstNumber * secondNumber
    } else if ( operator === 'divide'){
        displayElement.innerText = firstNumber / secondNumber
    }

    



    

}
const clearClick = () => {

}




numberElement.forEach(el => el.addEventListener('click', numberClick))

operatorElement.forEach(el => el.addEventListener('click', operatorclick))

equalsElement.addEventListener('click', equalsClick)

clearElement.addEventListener('click', clearClick)
/*-------------------------------- Functions --------------------------------*/












































/*const likeButtonElement = document.querySelector('#like-button')
const dislikeButtonElement = document.querySelector('#dislike-button')

let likesCount = 0;
let disLikeCount = 0;

const handleReaction = (event) =>{
    console.dir(event.target.id)

  if(event.target.id === 'like-button') {
       likesCount = likesCount + 1;
       console.log(likesCount);
       likeButtonElement.textContent = `${likesCount} like(s). Likes this post!`;
    }else{
        disLikeCount = disLikeCount + 1;
        dislikeButtonElement.textContent =`${disLikeCount} dislike(s). dislike this post!.`

    }
  


    
}

likeButtonElement.addEventListener('click', handleReaction )
dislikeButtonElement.addEventListener('click', handleReaction)   


const commentButtonElement = document.querySelector('#comment-button')
const commentListElement = document.querySelector('ul')
const inputElement = document.querySelector('input')




commentButtonElement.addEventListener('click', () =>{
    if(inputElement.value !==''){
    const commentElement = document.createElement('li');
    
    commentElement.textContent = inputElement.value;
    commentListElement.appendChild(commentElement);
    inputElement.value = '';
}
})
*/