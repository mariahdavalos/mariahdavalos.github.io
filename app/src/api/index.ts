import axios from 'axios'

// initially set up to proxy if we're in the development environment and can run our backend
// however, it won't make it this far with the env isn't development, so when we do build backend
// integration, we can use the latter half of this conditional.
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

