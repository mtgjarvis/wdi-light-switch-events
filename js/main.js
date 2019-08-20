
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').addEventListener('click', function(e2) {
//         e2.target.classList.toggle('on')
//         e2.target.classList.toggle('off')

//         document.body.classList('light')
//         document.body.classList('dark')

//         const status = document.querySelector('.status')
//         status.innerText = document.body.contains('light')
//     })
// })

document.addEventListener('DOMContentLoaded', function() {
    const status = document.querySelector('.status')
    const lightSwitch = document.querySelector('.switch')
    const body = document.querySelector('body')

    lightSwitch.addEventListener('click', function() {
        if (lightSwitch.getAttribute('class') === 'switch on') {
            lightSwitch.setAttribute('class', 'switch off')
            body.setAttribute('class', 'dark')
            status.innerHTML('Who Turn Of the Lights')
        } else if (lightSwitch.getAttribute('class') === 'switch off') {
            lightSwitch.setAttribute('class', 'switch on')
            body.setAttribute('class', 'light')
            status.innerHTML("It's so bright in here!")
        }
    })
})