import { useQuery } from "@tanstack/react-query";
import DashBoardSectionTitle from "../../Shared/DashBoardSectionTitle";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const AllUser = () => {
    const axiosSecure=AxiosPublic()
    const {data:user=[],refetch}=useQuery({
        queryKey:['users'],queryFn:async()=>{
            const res=axiosSecure.get('/users')
            return (await res).data
        }
    })
    const handleToDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const data=await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`)
                .then((res)=>{
                    console.log(res.data);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                })
           
            }
          });

    }
    const handleToMakeAdmin= async user=>{
        console.log(user);
            const data=await axios.patch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`)
            .then((res)=>{
                console.log(res);
                if(res.data.modifiedCount>0){
                    Swal.fire({
                        title:`${user.name} update as admin`,
                        icon: "success"
                      });
                }
                refetch()
            })
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
               <td>
                {
                    item.role==='admin'?"admin":  <FaUser onClick={()=>handleToMakeAdmin(item)} className="bg-[#D1a054] text-white p-2 text-4xl btn"></FaUser>
                }
                
                </td>
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