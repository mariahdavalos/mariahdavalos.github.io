import { atom } from 'recoil';

export const defaultTrainSchedules = [{
    "DESTINATION": "Hamilton E Holmes", "DIRECTION": "W", "EVENT_TIME": "12\/27\/2013 12:29:42 PM", "LINE": "BLUE", "NEXT_ARR": "12:29:52 PM", "STATION": "VINE CITY STATION", "TRAIN_ID": "101206", "WAITING_SECONDS": "-31"
    , "WAITING_TIME": "Boarding"
}, {
    "DESTINATION": "Airport",
    "DIRECTION": "S", "EVENT_TIME": "12\/27\/2013 12:30:06 PM", "LINE": "GOLD", "NEXT_ARR": "12:30:16 PM", "STATION": "GARNETT STATION", "TRAIN_ID": "302506", "WAITING_SECONDS": "-7",
    "WAITING_TIME": "Boarding"
}]

export const trainSchedulesAtom = atom({
    key: 'trainSchedules',
    default: defaultTrainSchedules
})