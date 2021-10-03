import { useMemo, useState } from "react"
import { useRecoilState } from "recoil"
import RefreshIcon from '@mui/icons-material/Refresh';

import { parseTrainArrivals } from "../../helpers/utils"
import { filterSelectionAtom } from "../../store/atoms/filterSelectionAtom"
import { trainSchedulesAtom } from "../../store/atoms/trainSchedulesAtom"
import Filter from "../common/filter/Filter"
import TrainScheduleSelectionItems from "./selectionItems/TrainScheduleSelectionItems"

import './TrainScheduleContainer.scss'

const fetchTrainSchedules = () => {
    return {}
}

const TrainScheduleContainer = () => {
    const noMatchingSchedulesText = 'No schedules found. Please adjust your filter criteria and try again.'

    const [filterSelection] = useRecoilState(filterSelectionAtom);
    const [currentTrainSchedules] = useRecoilState(trainSchedulesAtom);

    const [updatedTrainSchedules, setUpdatedTrainSchedules] = useState(parseTrainArrivals(currentTrainSchedules))

    useMemo(() => {
        setUpdatedTrainSchedules(parseTrainArrivals(currentTrainSchedules, filterSelection))
    }, [currentTrainSchedules, filterSelection])

    return <div className='train-schedule-container'>
        <div className='filter-and-refresh'>
            <Filter /> or
            <RefreshIcon onClick={() => setUpdatedTrainSchedules(fetchTrainSchedules())} style={{ color: '#FDBE43', cursor: 'pointer', marginLeft: '6px' }} />
        </div>
        {updatedTrainSchedules.length > 0 ?
            <TrainScheduleSelectionItems trainSchedules={updatedTrainSchedules} /> :
            <div className='no-matching'>{noMatchingSchedulesText}</div>}
    </div>

}

export default TrainScheduleContainer