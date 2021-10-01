import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';


import FilterButton from "../buttons/FilterButton";
import { filterSelectionAtom } from "../../../store/atoms/filterSelectionAtom";
import './Filter.scss'


const filterDirections = ['North', 'South', 'East', 'West'];
const filterLines = ['Red', 'Gold', 'Blue', 'Green'];

const updatedFilterSelection = (updatedValue: string, filter: string, filterSelection: any, setFilterSelection: any) => {
    let updatedFilterSelection = { ...filterSelection }

    if (filterSelection[filter].some((value: string) => value === updatedValue.toLowerCase())) {
        updatedFilterSelection[filter as any] = filterSelection[filter].filter((value: string) => value !== updatedValue.toLowerCase())
    } else {
        updatedFilterSelection[filter as any] = [...updatedFilterSelection[filter as any], updatedValue.toLowerCase()]
    }

    setFilterSelection(updatedFilterSelection)
}

const generateCheckboxes = (formLabel: string, checkboxValues: string[], filterSelection: any, setFilterSelection: any) => {
    return <div className='form' >
        <FormControl component="fieldset">
            <FormLabel component="legend">{`${formLabel}: `}</FormLabel>
            <FormGroup aria-label="position" row>
                {checkboxValues.map(checkboxValue =>
                    <FormControlLabel style={{ margin: '10.5px' }}
                        key={checkboxValue}
                        labelPlacement="bottom"
                        control={
                            <Checkbox
                                onChange={() => updatedFilterSelection(checkboxValue, formLabel.toLowerCase(), filterSelection, setFilterSelection)}
                                style={{ color: '#FDBE43', width: '20px', margin: '12px' }}
                                checked={filterSelection[formLabel.toLowerCase() as any]?.some((value: any) => value === checkboxValue.toLowerCase())} />}
                        label={checkboxValue}
                    />
                )}
            </FormGroup>
        </FormControl>
    </div>
}

const directionOptions = (filterSelection: any, setFilterSelection: any) => {
    return generateCheckboxes('Directions', filterDirections, filterSelection, setFilterSelection)
}

const lineOptions = (filterSelection: any, setFilterSelection: any) => {
    return generateCheckboxes('Lines', filterLines, filterSelection, setFilterSelection);
}

const getLocationInput = (locationType: string, filterSelection: any) => {
    return <TextField style={{ borderColor: 'white', marginBottom: '8px' }} id={`${locationType}Location`} label={`${locationType} Location`} variant="outlined" />

}

const toggleFilter = (showFilter: boolean, setShowFilter: any) => {
    setShowFilter(showFilter)
}

const Filter = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [filterSelection, setFilterSelection] = useRecoilState(filterSelectionAtom);

    const [lines, setLines] = useState(lineOptions(filterSelection, setFilterSelection))
    const [directions, setDirections] = useState(directionOptions(filterSelection, setFilterSelection))

    useEffect(() => {
        setLines(lineOptions(filterSelection, setFilterSelection));
        setDirections(directionOptions(filterSelection, setFilterSelection))

    }, [filterSelection])

    return <div className='filter-container'>
        <FilterButton onClick={() => toggleFilter(true, setShowFilter)} />

        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: '#0092D0',
                    boxShadow: 'none',
                },
            }}
            onClose={() => toggleFilter(false, setShowFilter)} open={showFilter}>
            <DialogTitle className='dialog-title'>Filter Options</DialogTitle>
            <div className='orange-divider' />

            <div className='filter-dialouge'>
                <div className='location-filter-options'>
                    {getLocationInput('Arrival', filterSelection)}
                    {getLocationInput('Departure', filterSelection)}
                </div>
                {lines}
                {directions}
            </div>
        </Dialog>
    </div >
}

export default Filter;