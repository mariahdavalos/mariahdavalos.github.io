import Button from '@mui/material/Button';

const SubmitButton = ({ onClick }: { onClick: any }) => {
    return <Button onClick={() => onClick()} variant="outlined" style={{
        width: '7.5rem',
        alignSelf: 'flex-end',
        marginRight: '1.5rem',
        marginBottom: '1.5rem',
        backgroundColor: '#FF7500',
        borderColor: '#FF7500',
        color: '#212121'
    }}>OK</Button>
}

export default SubmitButton;