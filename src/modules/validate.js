const validate = () => {
    const calcInputs = document.querySelectorAll('.calc-block>input[type = text]')
    const valName = document.querySelectorAll('[placeholder="Ваше имя"]')
    const valEmail = document.querySelectorAll('[placeholder="E-mail"]')
    const valPhone = document.querySelectorAll('[placeholder="Номер телефона"]')
    const valMessage = document.querySelector('[placeholder="Ваше сообщение"]')
    const valPhoneModal = document.getElementById('form3-phone')
    const valEmailModal = document.getElementById('form3-email')

    calcInputs.forEach((calcInput) => {
        calcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '')
        })
    })

    valPhone.forEach(valPhone => valPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1')
    }))

    valPhoneModal.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1')
    })

    valEmail.forEach(valEmail => valEmail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/, '$1')
    }))

    valEmailModal.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^@ - _ .! ~ * ' a-z A-Z 0-9]+(.*)/, '$1')
    })

    valName.forEach(valName => valName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ]/g, "")
    }))

    valMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ \s]/g, "")
    })

}

export default validate