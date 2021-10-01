const samples = [{
    "DESTINATION": "Hamilton E Holmes", "DIRECTION": "W", "EVENT_TIME": "12\/27\/2013 12:29:42 PM", "LINE": "BLUE", "NEXT_ARR": "12:29:52 PM", "STATION": "VINE CITY STATION", "TRAIN_ID": "101206", "WAITING_SECONDS": "-31"
    , "WAITING_TIME": "Boarding"
}, {
    "DESTINATION": "Airport",
    "DIRECTION": "S", "EVENT_TIME": "12\/27\/2013 12:30:06 PM", "LINE": "GOLD", "NEXT_ARR": "12:30:16 PM", "STATION": "GARNETT STATION", "TRAIN_ID": "302506", "WAITING_SECONDS": "-7",
    "WAITING_TIME": "Boarding"
}];

const getDirection = (direction: string) => {
    const term = 'bound'
    switch (direction) {
        case ('N'):
            return `North${term}`
        case ('S'):
            return `South${term}`
        case ('E'):
            return `East${term}`
        case ('W'):
            return `West${term}`
        default:
            return `¯\_(ツ)_/¯`
    }
}

export const parseTrainArrivals = () => {
    return samples.map(sample => { return { id: sample.TRAIN_ID, dest: sample.DESTINATION.toUpperCase(), dir: getDirection(sample.DIRECTION), line: sample.LINE, arrivalTime: sample.NEXT_ARR, arrivalStation: sample.STATION.toUpperCase(), waitTime: sample.WAITING_TIME } })
}


export const getGreeting = () => {
    const time = new Date().getHours()
    const greeting = 'Good '

    if (time < 12) {
        return `${greeting}morning!`
    } else if (time < 18) {
        return `${greeting}afternooon!`
    } else {
        return `${greeting}evening!`
    }
}


export default {}