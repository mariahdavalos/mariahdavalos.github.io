import { useEffect, useMemo, useState } from "react"
import { useRecoilState } from "recoil"
import RefreshIcon from '@mui/icons-material/Refresh'

import { parseTrainArrivals } from "../../helpers/utils"
import { filterSelectionAtom } from "../../store/atoms/filterSelectionAtom"
import { trainSchedulesAtom } from "../../store/atoms/trainSchedulesAtom"
import Filter from "../common/filter/Filter"
import TrainScheduleSelectionItems from "./selectionItems/TrainScheduleSelectionItems"
import { fetchTrainSchedules } from '../../api/index'

import './TrainScheduleContainer.scss'

const TrainScheduleContainer = () => {
    const noMatchingSchedulesText = 'No schedules found. Please adjust your filter criteria and try again.'

    const [filterSelection] = useRecoilState(filterSelectionAtom);
    const [currentTrainSchedules, setCurrentTrainSchedules] = useRecoilState(trainSchedulesAtom);

    const [updatedTrainSchedules, setUpdatedTrainSchedules] = useState(parseTrainArrivals(currentTrainSchedules))

    useMemo(() => {
        fetchTrainSchedules().then((trainSchedules: any) => setCurrentTrainSchedules(trainSchedules))
    }, [setCurrentTrainSchedules])

    useEffect(() => {
        setUpdatedTrainSchedules(parseTrainArrivals(currentTrainSchedules, filterSelection))
    }, [currentTrainSchedules, filterSelection])

    return <div className='train-schedule-container'>
        <div className='filter-and-refresh'>
            <Filter /> or
            <RefreshIcon onClick={() => fetchTrainSchedules().then((trainSchedules: any) => setCurrentTrainSchedules(trainSchedules))} style={{ color: '#FDBE43', cursor: 'pointer', marginLeft: '6px' }} />
        </div>
        {updatedTrainSchedules.length > 0 ?
            <TrainScheduleSelectionItems trainSchedules={updatedTrainSchedules} /> :
            <div className='no-matching'>{noMatchingSchedulesText}</div>}
    </div>

}

export default TrainScheduleContainer