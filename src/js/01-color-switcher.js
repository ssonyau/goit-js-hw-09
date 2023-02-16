const refs = {
  startBtn: document.querySelector('[data-start]'),
  stoptBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
}


let timeoutID = null;

refs.startBtn.addEventListener('click', chanceBodyColor);
refs.stoptBtn.addEventListener('click', stopChanceColor);

function chanceBodyColor () {
  timeoutID = setInterval(() => {
       randomHexColor ()  
  }, 1000)
  refs.startBtn.disabled = true;
  refs.stoptBtn.disabled = false;
};

function stopChanceColor (){
  clearInterval(timeoutID)
  refs.startBtn.disabled = false;
  refs.stoptBtn.disabled = true;
}

function randomHexColor () {
  refs.body.style.backgroundColor= getRandomHexColor();
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
