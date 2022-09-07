import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validate from './modules/validate'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('26 august 2022')
menu()
modal()
validate()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    formId2: 'form2',
    formId3: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
