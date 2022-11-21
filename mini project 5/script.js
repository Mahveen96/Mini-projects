document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0px'
document.body.style.padding = '0px'

const wrapper = document.querySelector('.wrapper')
wrapper.style.fontFamily = 'Montserrat'
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'space-between'
wrapper.style.flexDirection = 'column'

const title = document.createElement('h1')
wrapper.appendChild(title)
title.textContent = 'Number Generator'
title.style.color = '#02a15c'
title.style.fontSize = '24px'
title.style.fontWeight = 600

const challengeTitle = document.createElement('h2')
challengeTitle.textContent = '30DaysOfJavaScript:DOM Day 3'
wrapper.appendChild(challengeTitle)
challengeTitle.style.fontSize = '15px'
challengeTitle.style.marginTop = '-10px'
challengeTitle.style.fontWeight = 400

const authorName = document.createElement('p')
authorName.textContent = 'Author: Asabeneh Yetayah'
wrapper.appendChild(authorName)
authorName.style.fontSize = '12px'
authorName.style.marginTop = '-12px'

const inputMessage = document.createElement('p')
wrapper.appendChild(inputMessage)

const inputDiv = document.createElement('div')
wrapper.appendChild(inputDiv)
inputDiv.style.display = 'flex'
inputDiv.style.justifyContent = 'center'
inputDiv.style.gap = '15px'
inputDiv.style.width = '100%'

const inputFeild = document.createElement('input')
inputFeild.setAttribute('type', 'text')
inputFeild.setAttribute('placeholder', 'Generate more numbers')
inputDiv.appendChild(inputFeild)
inputFeild.style.border = '1px solid #02a15c'
inputFeild.style.padding = '0.5rem'
inputFeild.style.width = '45%'
inputFeild.style.outline = 'none'
inputFeild.addEventListener('blur', (e) => {
    e.target.textContent = (inputFeild.value === '') ? 
    (inputMessage.textContent = 'Enter number value in input feild to generate number', inputMessage.style.marginRight = '20rem') : (parseInt(inputFeild.value)) ? (inputMessage.textContent = '') : (inputMessage.textContent = 'Input value must be a number' ,inputMessage.style.marginRight = '28rem')
    inputMessage.style.color = 'red'
    inputMessage.style.fontSize = '12px'
})

// bug in cleaning html div element
const button = document.createElement('button')
button.textContent = 'Generate numbers'
inputDiv.appendChild(button)
button.style.background = '#02a15c'
button.style.border = 'none'
button.style.outline = 'none'
button.style.color = 'white'
button.style.width = '15%'

button.addEventListener('click', (e) => {
let value = parseInt(inputFeild.value)

let blocks
for(let i = 0; i <= value; i++) {
    blocks = document.createElement('div');
    blocks.className = 'number';
    blocks.textContent = i;
    blocks.style.padding = '0.1rem 0.7rem';
    blocks.style.margin = '2px';
    blocks.style.textAlign = 'center';
    blocks.style.color = 'white';
    blocks.style.fontSize = '1.7rem';
    blocks.style.width = '50px'
    if(i % 2 === 0) {
        blocks.style.background = '#1bc564';
    }
    if(i % 2) {
        blocks.style.background = '#ffcc00';
    }
    if(i !== 1 && i !== 0) {
        let notPrime = false;
        for (let j = 2; j <= i; j++) {
            if (i % j ===0 && j !== i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                blocks.style.background = '#ee5842';
        }
    }
   table.appendChild(blocks);
}
})
    
let table = document.createElement('div');
wrapper.appendChild(table);
table.style.margin = '0.5rem 10rem';
table.style.display = 'grid';
table.style.gridTemplateColumns = 'auto auto auto auto auto auto auto auto auto';
