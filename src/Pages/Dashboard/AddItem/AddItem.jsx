import { useForm } from "react-hook-form";
import DashBoardSectionTitle from "../../../Shared/DashBoardSectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AxiosPublic from "../../../AxiosPublic/AxiosPublic";
import Swal from "sweetalert2";
const imageHost=import.meta.env.VITE_IMAGE_HOSTING_API
const image_upload_url=`https://api.imgbb.com/1/upload?key=${imageHost}`
const AddItem = () => {
    const axiosPublic=useAxiosPublic()
    const axiosSecure=AxiosPublic()
    const { register, handleSubmit,formState:{errors},reset } = useForm()
    const onSubmit =async (data) => {
         console.log(data)
         const imageFile={image:data.image[0]}
         const res=await axiosPublic.post(image_upload_url,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
         })
        //  console.log(res.data);
         if(res.data.success){
            const menuItem={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:res.data.data.display_url
            }
            const menuRes=await axiosSecure.post('/menu',menuItem)
            console.log(menuRes);
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         }
         }
    return (
        <div>
            <DashBoardSectionTitle
                subHeading={'---Whats new?---'}
                Heading={'ADD AN ITEM'}
            >
            </DashBoardSectionTitle>
            <div className="w-[70%] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Recipe Name<sup>*</sup></span>
                        </label>
                        <input type="text"{...register('name',{required:true})} placeholder="Recipe Name" className="input input-bordered" />
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
                        <select defaultValue={'default'} {...register('category',{required:true})} className="select w-full max-w-xs font-semibold">
                            <option disabled value={'default'}>Pick your Category</option>
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
                        <input type="number"{...register('recipeName',{required:true})} placeholder="Price" className="input input-bordered" required />
                    </div>
                  </div>
                  <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Recipe details<sup>*</sup></span>
                        </label>
                        <textarea placeholder="Recipe Details" {...register('recipe',{required:true})} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                  <div className="flex flex-col justify-start space-y-2">
                 <div className="form-control border">
                 <input type="file" {...register('image',{required:true})} className="file-input file-input-ghost w-full max-w-xs" />
                 </div>
                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white w-40 text-lg ">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                  </div>
                  
                </form>
            </div>
        </div>
    );
};

export default AddItem;