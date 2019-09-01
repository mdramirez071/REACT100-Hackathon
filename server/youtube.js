//const axios = require('axios');
import axios from 'axios';
const KEY = process.env.KEY; //acquired KEY from Google Developers Console

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', //this snippet shows an actual snippet of the video title, description ,and other video-related information.
        maxResults: 5,
        key: KEY
    }
})