import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c6caea4e6b2d49f09cc49fe888b6c7c2'
    }
})