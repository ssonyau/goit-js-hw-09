import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  myInput: document.querySelector("#datetime-picker"),
  timerRef: document.querySelector('.timer'), 
};

let timerDeadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    timerDeadline = selectedDates[0].getTime();
    const delta = timerDeadline - Date.now();
    if (delta <= 0 ) {
      Notiflix.Notify.failure('Please choose a date in the future');
              refs.startBtn.disabled = true;
      return;
  } else {
    refs.startBtn.disabled = false;
  }
},
};
flatpickr(refs.myInput, options);


const timer ={
 intervalId: null,

 refs: {},

start(rootSelector, timerDeadline) {
  const delta = timerDeadline - Date.now();
console.log(delta);

this.getRefs(rootSelector);

this.intervalId = setInterval(() => {
  const diff = timerDeadline - Date.now();
console.log(diff);
  if (diff <= 1000) {
    clearInterval(this.intervalId);
  }
  const data = this.convertMs(diff);

  this.refs.days.textContent = this.addLeadinZero(data.days);
  this.refs.hours.textContent = this.addLeadinZero(data.hours);
  this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
  this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
}, 1000);
  },

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },
  convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
  },

  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};

refs.startBtn.addEventListener('click', ()=> timer.start(refs.timerRef, timerDeadline))