import { useEffect, useMemo, useState } from "react";

import './TrainScheduleSelectionItems.scss'

const getSchedule = (trains: any, hideLine: boolean) => {
    if (!trains) return <div />;

    return <div>
        {trains.map((train: any) =>
            <div key={train.dest + train.arrivalStation + train.arrivalTime} className='line-item'>
                <span className='info-container'>
                    <span className='info-content'>{train.arrivalStation}</span>
                    <span className='info-content to'>to</span>
                    <span className='info-content'>{train.dest}</span>
                </span>
                <span className='direction-container'>{`( ${train.dir} )`}</span>
                <span className='fade-container'>
                    <span className={!hideLine ? 'arrival-text hide-width fade-in' : 'arrival-text show-width fade-in show'}>Arrival: {train.arrivalTime}</span>
                    <span className={hideLine ? 'fade-in' : 'fade-in show'}>
                        <span className={`${train.line?.toLowerCase()} line-indicator`} />
                        <span className='line-text'>{`${train.line} LINE`} </span>
                    </span>
                </span>
            </div>)
        }
    </div>
}

// train schedule selection items. renders each train schedule in a new container
// and passing the array back to the container.
// shows line, arrival, destination, direction, and arrival time.
const TrainScheduleSelectionItems = ({ trainSchedules }: { trainSchedules: any }) => {
    const [hideLine, setHideLine] = useState(false)
    const [scheduleSelectionItems, setScheduleSelectionItems] = useState(getSchedule(trainSchedules, hideLine))

    // animation effect used for showing arrival times and lines in an easing container
    useEffect(() => {
        const timer = setInterval(() => {
            setHideLine(hideLine => !hideLine)
        }, 2500);
        return () => {
            clearInterval(timer);
        }
    }, []);

    useMemo(() => { setScheduleSelectionItems(getSchedule(trainSchedules, hideLine)) }, [hideLine, trainSchedules])

    return scheduleSelectionItems
}

export default TrainScheduleSelectionItems;