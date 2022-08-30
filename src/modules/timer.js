const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRimaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = 0
        let hours = 0
        let minutes = 0
        let seconds = 0
        if (timeRemaining > 0) {
            days = Math.floor(timeRemaining / 60 / 60 / 24)
            hours = Math.floor((timeRemaining / 60 / 60) % 24)
            minutes = Math.floor((timeRemaining / 60) % 60)
            seconds = Math.floor(timeRemaining % 60)
        }

        return { timeRemaining, days, hours, minutes, seconds }
    }
    const updateClock = () => {
        let getTime = getTimeRimaining()

        if (getTime.days == 1) {
            timerDays.textContent = `${getTime.days} день`
        } else if (getTime.days < 5) {
            timerDays.textContent = `${getTime.days} дня`
        } else {
            timerDays.textContent = `${getTime.days} дней`
        }

        timerDays.textContent = getTime.days >= 10 ? getTime.days : `0${getTime.days}`
        timerHours.textContent = getTime.hours >= 10 ? getTime.hours : `0${getTime.hours}`
        timerMinutes.textContent = getTime.minutes >= 10 ? getTime.minutes : `0${getTime.minutes}`
        timerSeconds.textContent = getTime.seconds >= 10 ? getTime.seconds : `0${getTime.seconds}`

        if (getTime.timeRemaining < 0) {
            timeInterval
        } else {
            clearInterval(timeInterval)
        }
    }

    let timeInterval
    timeInterval = setInterval(() => {
        updateClock()
    }, 1000)

}

export default timer