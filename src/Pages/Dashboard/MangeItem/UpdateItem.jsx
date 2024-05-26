import { useForm } from "react-hook-form";
import DashBoardSectionTitle from "../../../Shared/DashBoardSectionTitle";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import AxiosPublic from "../../../AxiosPublic/AxiosPublic";

const UpdateItem = () => {
    const axiosSecure=AxiosPublic()
    const item=useLoaderData()
    const { register, handleSubmit,formState:{errors},reset } = useForm()
    const onSubmit=async(data)=>{
            const menuItem={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
            }
            const menuRes=await axiosSecure.patch(`/menuField/${item._id}`,menuItem)
            console.log(menuRes);
            if(menuRes.data.modifiedCount>0){
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${item.name} update successful`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    }
    return (
        <div>
            <DashBoardSectionTitle
            subHeading={'------UPDATE ITEM-----'}
            Heading={'UPDATE ITEM'}
            ></DashBoardSectionTitle>
              <div className="w-[70%] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Recipe Name<sup>*</sup></span>
                        </label>
                        <input type="text"{...register('name',{required:true})} placeholder="Recipe Name" defaultValue={item.name} className="input input-bordered font-semibold text-gray-500" />
                        {
                            errors.name?.type==="required"&&
                            <p role="alert">Recipe Name i required</p>
                        }
                    </div>
                  <div className="flex flex-col md:flex-row lg:flex-row">
                  <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Category<sup>*</sup></span>
                        </label>
                        <select defaultValue={item.category} {...register('category',{required:true})} className="select w-full max-w-xs font-semibold">
                            <option disabled >Pick your Category</option>
                            <option className="text-lg">salad</option>
                            <option className="text-lg">soup</option>
                            <option className="text-lg">desert</option>
                            <option className="text-lg">drinks</option>
                            <option className="text-lg">pizza</option>
                        </select>        </div>
                        <div className="form-control w-full md:w-[50%] lg:w-[50%]">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Price<sup>*</sup></span>
                        </label>
                        <input type="number"{...register('recipeName',{required:true})} placeholder="Price" defaultValue={item.price} className="input input-bordered font-semibold text-gray-500" required />
                    </div>
                  </div>
                  <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Recipe details<sup>*</sup></span>
                        </label>
                        <textarea defaultValue={item.recipe} placeholder="Recipe Details" {...register('recipe',{required:true})} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                  <div className="flex justify-center space-y-2">
                
                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white w-40 text-lg ">
                        Update Item
                    </button>
                  </div>
                  
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;