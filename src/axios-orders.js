import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-91f3b.firebaseio.com/'
});

export default instance;