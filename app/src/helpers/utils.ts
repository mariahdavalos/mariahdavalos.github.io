const getDirection = (direction: string, fullDisplayName: boolean) => {
    const term = fullDisplayName ? 'bound' : ''
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

// only select values that contain one of the selected filter values when dealing with groups like checkboxes
const filterContainsElement = (filterItems: string[], currentItem: string) => {
    return filterItems.some((filter: string) => filter === currentItem?.toLowerCase())
}

// empty strings on input filters are * filters
const filterMatchesElement = (filterItem: string, currentItem: string) => {
    return filterItem === '' || currentItem.toLowerCase().includes(filterItem?.toLowerCase())
}

// applies filter values to train arrivals 
const filterTrainArrivals = (trainSchedules: any, filterSelection: any) => {
    return trainSchedules.filter((trainSchedule: any) => filterContainsElement(filterSelection.lines, trainSchedule.LINE)
        && filterContainsElement(filterSelection.directions, getDirection(trainSchedule.DIRECTION, false))
        && filterMatchesElement(filterSelection.departure, trainSchedule.DESTINATION)
        && filterMatchesElement(filterSelection.arrival, trainSchedule.STATION))
}

// formats api response from marta into something more usable
export const parseTrainArrivals = (trainSchedules: any, filterSelection?: any) => {
    let filteredSelection = trainSchedules;

    if (!!filterSelection) {
        filteredSelection = filterTrainArrivals(filteredSelection, filterSelection)
    }

    return filteredSelection.map((trainSchedule: any) => { return { dest: trainSchedule.DESTINATION?.toUpperCase(), dir: getDirection(trainSchedule.DIRECTION, true), line: trainSchedule.LINE, arrivalTime: trainSchedule.NEXT_ARR, arrivalStation: trainSchedule.STATION?.toUpperCase(), waitTime: trainSchedule.WAITING_TIME } })
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