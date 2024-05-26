import axios from "axios";

 const axiosPublic=axios.create({
    BASE_URL:"http://localhost:5000"
 })
const useAxiosPublic = () => {
    return  axiosPublic
};

export default useAxiosPublic;