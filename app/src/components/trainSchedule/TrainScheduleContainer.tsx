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

const getData = () => process.env.REACT_APP_ENV === 'production'

// container that fetches all the train schedules and renders the filter, refresh, and schedule table itself
// in development environments w/ proxy, return values from marta's api
// in production environment, we're going to fake data to work around the mixed content issue
const TrainScheduleContainer = () => {
    const noMatchingSchedulesText = 'No schedules found. Please adjust your filter criteria and try again.'

    // using recoil state management to keep track of the filters and train schedules on the page
    const [filterSelection] = useRecoilState(filterSelectionAtom);
    const [currentTrainSchedules, setCurrentTrainSchedules] = useRecoilState(trainSchedulesAtom);

    const [updatedTrainSchedules, setUpdatedTrainSchedules] = useState(parseTrainArrivals(currentTrainSchedules))

    // we only need to fetch this anmount to get the og train schedules and not re-render endlessly
    // while still being able to refresh everything when needed
    useMemo(() => {
        if (!getData()){
            fetchTrainSchedules().then((trainSchedules: any) => setCurrentTrainSchedules(trainSchedules))
        }
    }, [setCurrentTrainSchedules])

    useEffect(() => {
        setUpdatedTrainSchedules(parseTrainArrivals(currentTrainSchedules, filterSelection))
    }, [currentTrainSchedules, filterSelection])

    return <div className='train-schedule-container'>
        <div className='filter-and-refresh'>
            <Filter /> or
            <RefreshIcon onClick={() => { 
                //if not development don't fetch from api
                // if it is, re-fetch our train schedules and update our state
                if(getData()) return; 
                return fetchTrainSchedules().then((trainSchedules: any) => setCurrentTrainSchedules(trainSchedules))}} style={{ color: '#FDBE43', cursor: 'pointer', marginLeft: '6px' 
            }} />
        </div>
        {updatedTrainSchedules.length > 0 ?
            <TrainScheduleSelectionItems trainSchedules={updatedTrainSchedules} /> :
            <div className='no-matching'>{noMatchingSchedulesText}</div>}
    </div>

}

export default TrainScheduleContainer