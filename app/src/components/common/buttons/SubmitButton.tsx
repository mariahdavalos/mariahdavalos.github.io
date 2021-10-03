import Button from '@mui/material/Button';

const SubmitButton = ({ onClick }: { onClick: any }) => {
    return <Button onClick={() => onClick()} variant="outlined" style={{
        width: '120px',
        alignSelf: 'flex-end',
        marginRight: '24px',
        marginBottom: '24px',
        backgroundColor: '#FF7500',
        borderColor: '#FF7500',
        color: '#212121'
    }}>OK</Button>
}

export default SubmitButton;