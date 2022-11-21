const wrapper = document.querySelector('.wrapper');
wrapper.style.fontFamily = 'Montserrat';

const h1 = document.querySelector('h1');
h1.style.fontSize = '2rem';
h1.style.fontWeight = 600;

const year1 = document.querySelector('.year2022');
year1.style.fontSize = '5rem';

function settingColor() {
    let char = '0123456789abcdef';
    let hex = '';
    let color = '';
    for(let i = 0; i < 6; i++) {
        hex += char.charAt(Math.floor(Math.random() * char.length));
    }
    color = "#" + hex;
   if(year1) {
    year1.style.color = color;
   }
}

setInterval(settingColor, 1000);

 const h2 = document.querySelector('h2');
 h2.style.textDecoration = 'underline';
 h2.style.fontWeight = 400;
 h2.style.color = 'rgba(0, 0, 0, 0.85)';
 h2.style.marginTop = '-8px'

 const timer = document.querySelector('.timer');
 timer.style.padding = '0.7rem 2rem';
 timer.style.fontFamily = 'Montserrat';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function startTime() {
    let today = new Date()
    let date = today.getDate()
    let month = months[today.getMonth()]
    let year = today.getFullYear()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    // add a zero in front of numbers<10
    m = checkTime(m)
    s = checkTime(s)
    h = checkTime(h)
    timer.innerHTML = month + ' ' + date + ',' + ' ' + year + ' ' + h + ":" + m + ":" + s
    t = setTimeout(function() {
      startTime()
    }, 500)
  }
  startTime()
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function setTimeColor() {
    let char = '0123456789abcdef';
    let hex = '';
    let color = '';
    for(let i = 0; i < 6; i++) {
        hex += char.charAt(Math.floor(Math.random() * char.length));
    }
    color = "#" + hex;
    timer.style.background = color;
}
setInterval(setTimeColor, 1000);

const list = document.querySelector('ul');
const complete = document.querySelector('.complete');
const ongoing = document.querySelector('.ongoing');
const coming = document.querySelectorAll('.coming');
list.style.fontSize = '1rem';
complete.style.background = '#00cc66';
complete.style.padding = '1rem 25rem 1rem 1rem';
complete.style.margin = '5px';
ongoing.style.background = '#ffcc00';
ongoing.style.padding = '1rem';
ongoing.style.margin = '5px';
coming[0].style.background = '#ff6666';
coming[0].style.padding = '1rem';
coming[0].style.margin = '5px';
coming[1].style.background = '#ff6666';
coming[1].style.padding = '1rem';
coming[1].style.margin = '5px';
coming[2].style.background = '#ff6666';
coming[2].style.padding = '1rem';
coming[2].style.margin = '5px';
coming[3].style.background = '#ff6666';
coming[3].style.padding = '1rem';
coming[3].style.margin = '5px';
coming[4].style.background = '#ff6666';
coming[4].style.padding = '1rem';
coming[4].style.margin = '5px';
