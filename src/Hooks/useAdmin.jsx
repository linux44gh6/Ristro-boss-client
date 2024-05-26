import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AxiosPublic from "../AxiosPublic/AxiosPublic";
const useAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=AxiosPublic()
    const {data:isAdmin,isPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],queryFn:async()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data);
         return   res.data?.admin
        }
    })
    return [isAdmin,isPending]
};

export default useAdmin;