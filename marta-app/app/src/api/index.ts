import axios from 'axios'

export const fetchTrainSchedules = () => {
    return axios.get('/getTrainSchedules')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

