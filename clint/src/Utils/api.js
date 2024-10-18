import axios from 'axios';

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    // console.log('Request URL:', process.env.REACT_APP_STRIPE_APP_DEV_URL + url);
    // console.log('Request Headers:', params.headers);

    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.error("Error fetching data from API: ", err.response ? err.response.data : err.message);
        throw err;
    }
};
