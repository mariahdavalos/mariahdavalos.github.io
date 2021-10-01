import { atom } from 'recoil';

export const defaultFilterSelection = {
    arrival: '',
    departure: '',
    lines: ['red', 'blue', 'gold', 'green'],
    directions: ['north', 'south', 'east', 'west']
}

export const filterSelectionAtom = atom({
    key: 'filterSelection',
    default: defaultFilterSelection
})