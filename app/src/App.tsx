import {
  RecoilRoot
} from 'recoil';

import './App.scss'
import Header from './components/page/header/Header'
import TrainScheduleSelectionItem from './components/trainSchedule/selectionItem/TrainScheduleSelectionItem';

const App = () => {
  return (
    <RecoilRoot>
      <Header />
      <TrainScheduleSelectionItem />
    </RecoilRoot>
  );
}

export default App;
