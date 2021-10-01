import { useEffect, useMemo, useState } from "react";

import { parseTrainArrivals } from '../../../helpers/utils'
import './TrainScheduleSelectionItem.scss'


const getSchedule = (trains: any, hideLine: boolean) => {
    return <div>
        {trains.map((train: any) =>
            <div key={train.dest} className='test'>
                <span className='info-container'>
                    <span className='info-content'>{train.arrivalStation}</span>
                    <span className='info-content'>to </span>
                    <span className='info-content'>{train.dest}</span>
                </span>
                <span className='direction-container'>{`( ${train.dir} )`}</span>
                <span className='fade-container'>
                    <span className={!hideLine ? 'arrival-text hide-width fade-in' : 'arrival-text show-width fade-in show'}>Arrival: {train.arrivalTime}</span>
                    <span className={hideLine ? 'fade-in' : 'fade-in show'}>
                        <span className={`${train.line.toLowerCase()} line-indicator`} />
                        <span className='line-text'>{`${train.line} LINE`} </span>
                    </span>
                </span>
            </div>)
        }
    </div>
}

const TrainScheduleSelectionItem = () => {
    const [train] = useState(parseTrainArrivals())

    const [hideLine, setHideLine] = useState(false)
    const [scheduleSelectionItems, setScheduleSelectionItems] = useState(getSchedule(train, hideLine))

    useEffect(() => {
        const timer = setInterval(() => {
            setHideLine(hideLine => !hideLine)
        }, 2500);
        return () => {
            clearInterval(timer);
        }
    }, []);

    useMemo(() => { setScheduleSelectionItems(getSchedule(train, hideLine)) }, [hideLine])

    return scheduleSelectionItems
}

export default TrainScheduleSelectionItem;