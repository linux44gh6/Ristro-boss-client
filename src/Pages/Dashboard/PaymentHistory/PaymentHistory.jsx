import { useContext } from "react";
import DashBoardSectionTitle from "../../../Shared/DashBoardSectionTitle";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../../AxiosPublic/AxiosPublic";
import { FaTrashAlt } from "react-icons/fa";


const PaymentHistory = () => {
    const axiosSecure=AxiosPublic();
    const {user}=useContext(AuthContext)
    const {data:payment=[]}=useQuery({queryKey:['payment',user.email],queryFn:async()=>{
        const res=await axiosSecure.get(`/payment/${user.email}`)
         return res.data
    }})
    return (
        <div>
            <DashBoardSectionTitle
            subHeading={'---------History--------'}
            Heading={'Payment History'}
            ></DashBoardSectionTitle>
            <div className=" w-[70%] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead className="bg-[#D1a054] text-white text-lg uppercase">
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Transaction ID</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        {
            payment.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
                <td>
                    {index+1}
                </td>
       
                <td>
                  <div className="flex items-center gap-3">
                   <h1>{item.email}</h1>
                    
                  </div>
                </td>
                <td>
                 {item.trx}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{item.recipe}</span>
                </td>
                <td>${item.price}</td>
                <th>
                 <h1>{(item.date).slice(0,10)}</h1>
                </th>
              </tr>)
        }
      
      
    
    </tbody>
  
    
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;