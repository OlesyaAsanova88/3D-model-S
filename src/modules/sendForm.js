const sendForm = ({ formId, formId2, formId3, someElem = [] }) => {
    const form = document.getElementById(formId)
    const form2 = document.getElementById(formId2)
    const form3 = document.getElementById(formId3)
    const statusBlock = document.createElement('div')
    const loadText = 'Идет загрузка...'
    const errorText = 'Ошибка =('
    const successText = 'Данные отправлены, наш менеджер свяжется с вами в ближайшее время'

    const validate = (list) => {
        let success = true
        //list.forEach(input => {
        //if (!input.classList.contains('success')) {
        //success = false
        //}
        //})
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })
        console.log('submit')

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText

                formElements.forEach(input => {
                    input.value = ''
                })
            })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!')
        }

    }

    try {
        if (!form, !form2, !form3) {
            throw new Error('Верните форму на место, пожалуйста')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
        form2.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
        form3.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm