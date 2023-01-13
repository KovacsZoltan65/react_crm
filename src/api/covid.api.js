import axios from 'axios';

export const getCovidData = async () => {
    try {
        const response = await axios.get('https://corona-api.com/timeline');

        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
        throw new Error(e);
    }
};