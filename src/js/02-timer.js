import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStart = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')
const input = document.querySelector('#datetime-picker')
const resetBtn = document.querySelector('.js-btn')
let timerInterval = null;

resetBtn.addEventListener('click', resetDate)

function resetDate() {
    window.location.reload()
}

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] <= new Date()) {           
            return Notiflix.Notify.failure('Please choose a date in the future');
      } else {
          
          btnStart.disabled = false;
          
          btnStart.addEventListener('click', onClick);
      }
      function onClick() {
          input.disabled = true;          
          timerInterval = setInterval(handlerTime, 1000);
          btnStart.disabled = true;
      }
      function handlerTime() {
          const diffTime = selectedDates[0] - new Date();
          days.textContent =
              `${convertMs(diffTime).days.toString().padStart(2, 0)}`;
          hours.textContent =
              `${convertMs(diffTime).hours.toString().padStart(2, 0)}`;
          minutes.textContent =
              `${convertMs(diffTime).minutes.toString().padStart(2, 0)}`;
          seconds.textContent =
              `${convertMs(diffTime).seconds.toString().padStart(2, 0)}`;
              
          if (diffTime <= 500) {
              days.textContent = `00`;
              hours.textContent = `00`;
              minutes.textContent = `00`;
              seconds.textContent = `00`;
          }
          
      }
  
  },
};
flatpickr("#datetime-picker", options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};