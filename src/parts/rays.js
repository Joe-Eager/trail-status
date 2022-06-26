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
    update = '21-22 season',
    holiday = `${new Date().getMonth()}/${new Date().getDate()}`

const park = {
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
                park.status = true
                park.tweet = 'Open 9:00 am to 10:00 pm'
            } else {
                park.status = false
                park.tweet = 'Open 9:00 am to 10:00 pm'
            }
            return park
        default:
            if (time < 1200 && time > 2200) {
                park.status = true
                park.tweet = 'Open 12:00 pm to 10:00 pm'
            } else {
                park.status = false
                park.tweet = 'Open 12:00 pm to 10:00 pm'
            }
            return park
    }
}

function offSeason() {
    switch ((day)) {
        case 0:
            if (time < 1600 && time > 2200) {
                park.status = true
                park.tweet = 'Open 4:00 pm to 10:00 pm'
            } else {
                park.status = false
                park.tweet = 'Open 4:00 pm to 10:00 pm'
            }
            return park
        default:
            park.status = false
            park.tweet = 'Closed today'
            return park
    }
}

function rays() {
    park.time = update
    if (/(10\/1)|(11\/25)|(12\/25)|(4\/17)/i.test(holiday)) { // Holiday closures
        park.status = false
        park.tweet = 'Probably closed for the holiday'
    } else if (/(11\/26)|(12\/27)|(12\/28)|(12\/29)|(12\/30)|(12\/31)|(4\/15)/i.test(holiday)) {
        if (time < 900 && time > 2200) {
            park.status = true
            park.tweet = 'Open 9:00 am to 10:00 pm'
        } else {
            park.status = false
            park.tweet = 'Open 9:00 pm to 10:00 pm'
        }
    } else if (/(12\/24)/i.test(holiday)) { // Christmas
        if (time < 1200 && time > 1800) {
            park.status = true
            park.tweet = 'Open 12:00 pm to 6:00 pm\nMerry Christmas!'
        } else {
            park.status = false
            park.tweet = 'Open 12:00 pm to 6:00 pm\nMerry Christmas!'
        }
    } else if (/(2\/18)/i.test(holiday)) { //Women's weekend
        if (time < 1600 && time > 2200) {
            park.status = true
            park.tweet = 'Open 4:00 pm to 10:00 pm'
        } else {
            park.status = false
            park.tweet = 'Open 4:00 pm to 10:00 pm'
        }
    } else {
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
}

export default rays