import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


// const inputDate = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const flat = flatpickr("#datetime-picker", options)
// btnStart.disabled = true;
btnStart.addEventListener('click', () => {
    
        if (flat.selectedDates[0] <= new Date()) {           
            return Notiflix.Notify.failure('Please choose a date in the future');
    }
    
    setInterval(() => {
        const currentDay = new Date();
        days.textContent = flat.selectedDates[0].getDay() - currentDay.getDay() -flat.selectedDates[0].getDay()
        hours.textContent = flat.selectedDates[0].getHours() -currentDay.getHours()
        minutes.textContent = flat.selectedDates[0].getMinutes() - currentDay.getMinutes()
        seconds.textContent = flat.selectedDates[0].getSeconds() - currentDay.getSeconds()
        console.log(convertMs(flat.selectedDates[0] - currentDay));
    }, 1000)
})




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
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}