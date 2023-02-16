import Notiflix from 'notiflix';

const formRef =  document.querySelector('.form')
formRef.addEventListener('submit', getData)

function getData(evt) {
  evt.preventDefault()
  const {delay , step ,amount}=evt.currentTarget.elements;
  console.log(delay);
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
const amountValue = Number(amount.value);

for (let i = 0; i < amountValue; i++) {
  createPromise(i+1, delayValue + i* stepValue);  
}}


function createPromise(position, delayValue) {
 
  const shouldResolve = Math.random() > 0.3;

  
  let promise = new Promise((resolve, reject) => {
setTimeout(()=>{
  if(shouldResolve) {
    resolve (`✅ Fulfilled promise ${position} in ${delayValue}ms`)
  } else {
    reject(`❌ Rejected promise ${position} in ${delayValue}ms`) 
  }
}, delayValue)  
})
promise.then(result => Notiflix.Notify.success(result)).catch(result => Notiflix.Notify.failure(result))
}

