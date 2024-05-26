
import {  FaTrashAlt } from "react-icons/fa";
import useCart from "../CustomHook/useCart";
import DashBoardSectionTitle from "../Shared/DashBoardSectionTitle";
import Swal from "sweetalert2";
import axios from "axios";
const MyCart = () => {
    const [cart,refetch]=useCart()
    const price=cart.reduce((acc,item)=>acc+item.price,0)
    const handleToDelete=async(id)=>{
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
                const data=await axios.delete(`${import.meta.env.VITE_BASE_URL}/carts/${id}`)
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
    return (
        <div className=" w-full">
           <DashBoardSectionTitle
            subHeading={'---My Cart---'}
            Heading={'WANNA ADD MORE?'}
           >
           </DashBoardSectionTitle>
          
          <div className=" w-[80%] mx-auto">
          <div className=" flex justify-between items-center mb-4">
                <h1 className=" text-2xl font-bold uppercase">Total orders:{cart.length}</h1>
                <h1 className=" text-2xl font-bold uppercase">total price:${price}</h1>
                <button className="btn bg-[#D1A054] text-white">PAY</button>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead className="bg-[#D1a054] text-white text-lg uppercase">
      <tr>
        <th>#</th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item,index)=><tr  key={item._id} className=" text-lg font-semibold text-gray-600 mt-5">
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
        </div>
    );
};

export default MyCart;