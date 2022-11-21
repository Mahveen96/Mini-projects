document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0px'
document.body.style.padding = '0px'

const wrapper = document.querySelector('.wrapper')
wrapper.style.fontFamily = 'Montserrat'
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'space-between'
wrapper.style.flexDirection = 'column'

const keypress = document.createElement('div')
wrapper.appendChild(keypress)
keypress.textContent = 'Press any keyboard key'
keypress.style.color = 'rgba(0, 0, 0, 0.8)'
keypress.style.width = '40%'
keypress.style.textAlign = 'center'
keypress.style.padding = '1rem'
keypress.style.marginTop = '10rem'
keypress.style.fontSize = '2rem'
keypress.style.fontWeight = 600
keypress.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
document.body.addEventListener('keypress', (e) => {
keypress.textContent = 'You pressed' + ' ' + e.key
keyNumberCode.textContent = e.keyCode
})

const keyNumberCode = document.createElement('div')
wrapper.appendChild(keyNumberCode)
keyNumberCode.style.color = '#30c779'
keyNumberCode.style.padding = '2rem'
keyNumberCode.style.marginTop = '2rem'
keyNumberCode.style.fontSize = '5rem'
keyNumberCode.style.fontWeight = 600
keyNumberCode.style.boxShadow = 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'

