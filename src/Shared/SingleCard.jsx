import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../CustomHook/useCart";

// eslint-disable-next-line react/prop-types
const SingleCard = ({item}) => {
  const [,refetch]=useCart()
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
const {image,category,recipe,_id,price}=item
const handleToPost=data=>{
  if(user){
    const cartItem={
      menuID:_id,
      email:user.email,
      image,category,recipe,price
    }
   const data= axios.post(`${import.meta.env.VITE_BASE_URL}/carts`,cartItem)
  .then(res=>{
    Swal.fire({
      title: "Success",
      text: "Item Added success",
      icon: "Success",
    
    })
    refetch()
  })
   
  }
  else{
    Swal.fire({
      title: "You are not logged in",
      text: "You won't be able to add before login",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
      }
    });
  }
}
    return (
        <div>
              <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handleToPost(item)} className="btn outline-none  border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase hover:bg-gray-800">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;