document.body.style.fontFamily = 'Montserrat';
// document.body.style.margin = '0px';
// document.body.style.padding = '0px';

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'space-between';
container.style.flexDirection = 'column';

let h1 = document.querySelector('h1');
h1.style.fontSize = '26px';

let h2 = document.querySelector('h2');
h2.style.fontSize = '16px';
h2.style.textDecoration = 'underline';
h2.style.marginTop = '-18px';
h2.style.color = 'rgba(0, 0, 0, 0.85)';
h2.style.fontWeight = 500;

let h3 = document.querySelector('h3');
h3.style.fontSize = '12px';
h3.style.textDecoration = 'underline';
h3.style.marginTop = '-15px' ;
h3.style.color = 'rgba(0, 0, 0, 0.8)';
h3.style.fontWeight = 400;

let table = document.createElement('div');
document.body.appendChild(table);
table.style.margin = '0rem 11.5rem';
table.style.display = 'grid';
table.style.gridTemplateColumns = 'auto auto auto auto auto auto';

let blocks;
for(let i = 0; i <= 101; i++) {
    blocks = document.createElement('div');
    blocks.className = 'number';
    blocks.textContent = i;
    blocks.style.padding = '0.7rem';
    blocks.style.margin = '2px';
    blocks.style.textAlign = 'center';
    blocks.style.color = 'white';
    blocks.style.fontSize = '1.7rem';
    blocks.style.width = '80px'
    if(i % 2 === 0) {
        blocks.style.background = '#1bc564';
    }
    if(i % 2) {
        blocks.style.background = '#ffcc00';
    }
    // bug fixed
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

// prime number program will print from 0 to 100

// for (let counter = 0; counter <= 100; counter++) {

//     let notPrime = false;
//     for (let i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }