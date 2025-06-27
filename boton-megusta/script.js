const button = document.querySelectorAll(".like-buttons")

button.forEach(button =>{
    const icon = button.querySelector('.icon');
    const text = button.querySelector('.text');
    
    button.addEventListener('click', function () {
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
            icon.innerText = '🤍';
            text.innerText = 'Me gusta';
        } else {
            button.classList.add('liked');
            icon.innerText = '❤️';
            text.innerText = 'No me gusta';
        }
    });
})