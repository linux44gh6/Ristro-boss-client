import { useQuery } from "@tanstack/react-query";
import DashBoardSectionTitle from "../../Shared/DashBoardSectionTitle";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";
import { FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
    const axiosSecure=AxiosPublic()
    const {data:user=[],refetch}=useQuery({
        queryKey:['users'],queryFn:async()=>{
            const res=axiosSecure.get('/users')
            return (await res).data
        }
    })
    const handleToDelete=()=>{

    }
    return (
        <div>
            <DashBoardSectionTitle
            subHeading={'------How many?------'}
            Heading={"MANAGE ALL USERS"}
            ></DashBoardSectionTitle>
            <div className="">
                <h1 className="text-5xl uppercase">Total users:{user.length}</h1>

                <table className="table">
   
   <thead className="bg-[#D1a054] text-white text-lg uppercase">
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Email</th>
       <th>Roll</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
       {
           user.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
               <td>
                   {index+1}
               </td>
      
               <td>
                 <div className="flex items-center gap-3">
                   <h1>{item.name}</h1>
                   
                 </div>
               </td>
               <td>
                {item.email}
               </td>
               <td>{item.Roll}</td>
               <th>
                 <button onClick={()=>handleToDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt></FaTrashAlt></button>
               </th>
             </tr>)
       }
     
     
   
   </tbody>
 
   
 </table>
            </div>
        </div>
    );
};

export default AllUser;