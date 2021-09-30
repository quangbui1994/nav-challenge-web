import axios from 'axios';

export const fetchPopularRepos = () => {
    const url = 'http://localhost:5000/DB.json';

    return axios.get(url).then(data => data.data)
        .catch((error) => {
        console.warn(error)
        return null
    });
}
