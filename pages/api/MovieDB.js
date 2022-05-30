import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: "5b8ea366967d2bbe7fb738254e92489c"
    }
})