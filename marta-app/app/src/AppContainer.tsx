import {
    RecoilRoot
} from 'recoil';

import './AppContainer.scss'
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
