import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;