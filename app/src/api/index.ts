import axios from 'axios'

export const fetchTrainSchedules = () => {
    if (process.env.REACT_APP_ENV === 'development') {
        return axios.get('/getTrainSchedules')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        return axios.get(`${process.env.REACT_APP_MARTA_URL}?apikey=${process.env.REACT_APP_MARTA_API_KEY}`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

