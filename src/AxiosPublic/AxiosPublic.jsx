import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const publicAxios=axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`
})
const AxiosPublic = () => {
     const {logOut}=useContext(AuthContext)
     const navigate=useNavigate()
    publicAxios.interceptors.request.use(function(config){
        const token=localStorage.getItem('token')
        // console.log("req stop by interceptor",token);
        config.headers.authorization=`${token}`
        return config
    },function(err){
        return Promise.reject(err)
    })

    //interceptor 401 and 403 status
    publicAxios.interceptors.response.use(function(response){
        return response;
    },async( err)=>{
        // console.log('status code of err in ther interceptor',err);
        const status=err.response.status
        // console.log(status);
        if(status===401||status===403){
           await logOut()
           return navigate('/login')
        }
        return Promise.reject(err)
    })
 return publicAxios
};

export default AxiosPublic;