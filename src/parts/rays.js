function timeParse(time) {
    let newTime
    time < 10 ? newTime = `0${time}` : newTime = time
    return newTime
}

const month = new Date().getMonth(),
    day = new Date().getDay(),
    hour = new Date().getHours(),
    min = new Date().getMinutes(),
    time = parseInt(`${timeParse(hour)}${timeParse(min)}`),
    given = time >= 1300 ? `${timeParse(hour) - 12}:${timeParse(min)} pm` : `${timeParse(hour)}:${timeParse(min)} am`

const state = {
    name: "Rays Indoor",
    time: "",
    status: true,
    tweet: "",
    url: "https://raysmtb.com/prices-hours-directions/"
}

function season() {
    switch ((day)) {
        case 0:
        case 6:
            if (time < 900 && time > 2200) {
                state.status = true
                state.tweet = 'Open 9:00 am to 10:00 pm'
            } else {
                state.status = false
                state.tweet = 'Open 9:00 am to 10:00 pm'
            }
            return state
        default:
            if (time < 1200 && time > 2200) {
                state.status = true
                state.tweet = 'Open 12:00 pm to 10:00 pm'
            } else {
                state.status = false
                state.tweet = 'Open 12:00 pm to 10:00 pm'
            }
            return state
    }
}

function offSeason() {
    switch ((day)) {
        case 0:
            if (time < 1600 && time > 2200) {
                state.status = true
                state.tweet = 'Open 4:00 pm to 10:00 pm'
            } else {
                state.status = false
                state.tweet = 'Open 4:00 pm to 10:00 pm'
            }
            return state
        default:
            state.status = false
            state.tweet = 'Closed today'
            return state
    }
}

function rays() {
    state.time = given
    switch (month) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return offSeason()
        default:
            return season()
    }
}

export default rays