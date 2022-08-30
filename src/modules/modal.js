const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    //const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                modal.style.display = 'block'
            } else {
                modal.style.display = 'block'
                myAnimation()
            }
        })
    })
    //closeBtn.addEventListener('click', () => {
    // modal.style.display = 'none'
    //})
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

    const myAnimation = () => {
        let modalContent = document.querySelector('.popup-content')
        let pos = 0
        let id = setInterval(frame, 10)
        function frame() {
            if (pos == 250) {
                clearInterval(id)
            } else {
                pos++
                modalContent.style.top = pos + 'px'
            }
        }
    }
}

export default modal