/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isPending]=useAdmin()
    const location=useLocation()
    if(loading||isPending){
        return <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user&&isAdmin){
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default AdminPrivetRoute;