import Button from '@mui/material/Button';

const FilterButton = ({ onClick }: { onClick: any }) => {
    return <Button onClick={() => onClick()} variant="outlined" style={{ color: '#CCCCCC', borderColor: '#0092D0' }}>Filter By Details</Button>
}

export default FilterButton;