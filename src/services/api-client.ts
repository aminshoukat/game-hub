import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key: '9d695c0ab3b64cdb83992245807805f5'
    }
});