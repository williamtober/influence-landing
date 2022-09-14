const axios = require('axios');


const API = axios.create({
    baseURL: 'https://api.twitter.com/2/users/' + process.env.REACT_APP_TWITTER_USER_ID + '/tweets',
});

// make it so only data is returned from the response and error handling

API.interceptors.response.use((res) => (
    res ?  res.data : {}),
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

export default API;