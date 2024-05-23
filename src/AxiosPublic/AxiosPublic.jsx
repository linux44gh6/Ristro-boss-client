import axios from "axios";

const AxiosPublic = () => {
const publicAxios=axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`
})
    return publicAxios
};

export default AxiosPublic;