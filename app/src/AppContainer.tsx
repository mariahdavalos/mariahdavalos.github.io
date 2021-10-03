import {
    RecoilRoot
} from 'recoil';
import RefreshIcon from '@mui/icons-material/Refresh';

import './AppContainer.scss'
import Filter from './components/common/filter/Filter';
import Header from './components/page/header/Header'
import TrainScheduleContainer from './components/trainSchedule/TrainScheduleContainer';


const AppContainer = () => {
    return (
        <RecoilRoot>
            <Header />
            <TrainScheduleContainer />
        </RecoilRoot>
    );
}

export default AppContainer;
