import { useEffect, useState } from "react";
import DashBoardSectionTitle from "../../../Shared/DashBoardSectionTitle";
import axios from "axios";

import { FaTrashAlt } from "react-icons/fa";

import { HiPencilSquare } from "react-icons/hi2";
import Swal from "sweetalert2";
import AxiosPublic from "../../../AxiosPublic/AxiosPublic";
import useMenu from "../../../CustomHook/useMenu";
import { NavLink } from "react-router-dom";

const ManageItem = () => {
    const axiosSecure=AxiosPublic()
    const [menu, ,refetch]=useMenu()
   

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
         const data=await axiosSecure.delete(`/menu/${id}`)
            .then((res)=>{
                console.log(res.data);
               if(res.data.deletedCount>0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
        
               }
            })
       
        }
      });
   }
    
    return (
        <div>
            <DashBoardSectionTitle
            subHeading={'---Hurry Up!---'}
            Heading={'MANAGE ALL ITEMS'}
            >    
            </DashBoardSectionTitle>
            <div className=" w-[70%] mx-auto ">
            <div className="overflow-x-auto">
                <h1 className="text-5xl">total item:{menu.length}</h1>
  <table className="table">
    <thead className="bg-[#D1a054]  text-white text-lg uppercase ">
      <tr className="">
        <th>#</th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
                <td>
                    {index+1}
                </td>
       
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item.category}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{item.recipe}</span>
                </td>
                <td>${item.price}</td>
                <td><NavLink to={`/dashboard/updateItem/${item._id}`}>
                <button className="btn bg-[#D1A054]"><HiPencilSquare className="text-xl text-white"></HiPencilSquare></button>
                </NavLink></td>
                <th>
                  <button onClick={()=>handleToDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt></FaTrashAlt></button>
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

export default ManageItem;