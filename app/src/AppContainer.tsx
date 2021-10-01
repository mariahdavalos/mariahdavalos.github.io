import {
    RecoilRoot
} from 'recoil';

import './AppContainer.scss'
import Filter from './components/common/filter/Filter';
import Header from './components/page/header/Header'
import TrainScheduleSelectionItems from './components/trainSchedule/selectionItems/TrainScheduleSelectionItems';

const AppContainer = () => {
    return (
        <RecoilRoot>
            <Header />
            <Filter />
            <TrainScheduleSelectionItems />
        </RecoilRoot>
    );
}

export default AppContainer;
