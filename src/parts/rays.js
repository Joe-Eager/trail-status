function timeParse(time) {
    let newTime
    time < 10 ? newTime = `0${time}` : newTime = time
    return newTime
}

function rays(string) {
    const month = new Date(string).getMonth(),
        day = new Date(string).getDay(),
        hour = new Date(string).getHours(),
        min = new Date(string).getMinutes(),
        time = `${timeParse(hour)}${timeParse(min)}`,
        update = '21-22 season',
        holiday = `${new Date(string).getMonth() + 1}${new Date(string).getDate()}`,
        closure = /(101)|(1125)|(1225)|(417)/.test(holiday),
        extended = /(1126)|(1227)|(1228)|(1229)|(1230)|(1231)|(415)/.test(holiday),
        christmas = /(1224)/.test(holiday),
        womens = /(218)/.test(holiday),
        offSeason = /[564789]/.test(month)

    const park = {
        name: "Rays Indoor",
        time: "",
        status: true,
        tweet: "",
        url: "https://raysmtb.com/prices-hours-directions/"
    }

    console.log(christmas)
    console.log(holiday)

    park.time = update
    if (closure) { // Holiday closures
        park.status = false
        park.tweet = 'Probably closed for the holiday'
        return park
    } else if (extended) {
        if (time > 900 && time < 2200) {
            park.status = true
            park.tweet = 'Open 9:00 am to 10:00 pm'
        } else {
            park.status = false
            park.tweet = 'Open 9:00 pm to 10:00 pm'
        }
        return park
    } else if (christmas) { // Christmas
        console.log(time)
        if (time > 1200 && time < 1800) {
            park.status = true
            park.tweet = 'Open 12:00 pm to 6:00 pm'
        } else {
            park.status = false
            park.tweet = 'Open 12:00 pm to 6:00 pm'
        }
        return park
    } else if (womens) { //Women's weekend
        if (time > 1600 && time < 2200) {
            park.status = true
            park.tweet = 'Open 4:00 pm to 10:00 pm'
        } else {
            park.status = false
            park.tweet = 'Open 4:00 pm to 10:00 pm'
        }
        return park
    } else {
        if (offSeason) {
            switch ((day)) {
                case 0:
                    if (time > 1600 && time < 2200) {
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
        } else {
            switch ((day)) {
                case 0:
                case 6:
                    if (time > 900 && time < 2200) {
                        park.status = true
                        park.tweet = 'Open 9:00 am to 10:00 pm'
                    } else {
                        park.status = false
                        park.tweet = 'Open 9:00 am to 10:00 pm'
                    }
                    return park
                default:
                    if (time > 1200 && time < 2200) {
                        park.status = true
                        park.tweet = 'Open 12:00 pm to 10:00 pm'
                    } else {
                        park.status = false
                        park.tweet = 'Open 12:00 pm to 10:00 pm'
                    }
                    return park
            }
        }
    }
}

export default rays