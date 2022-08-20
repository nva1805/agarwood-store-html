const menubar = document.querySelector('.js-mobile-navList')
const model = document.querySelector('.model')
const modelContent = document.querySelector('.js-model-content')
    menubar.onclick = function() {
        model.classList.add('open')
    }
    model.onclick = function () {
        model.classList.remove('open')
    }
    modelContent.onclick = function(event) {
        event.stopPropagation()
        model.classList.remove('open')
    }