const inputs = document.querySelectorAll('.input')

function focusFunc () {
    let parent = this.parentNode
    parent.classList.add('focus')
}

function blurFunc () {
    let parent = this.parentNode
    if (this.value === '') {
        parent.classList.remove('focus')
    }
}

function register () {
    document.location.href = `pages/register.html`
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})
