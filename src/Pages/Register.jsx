import { Link, useNavigate } from 'react-router-dom';
import loginLogo from '../assets/others/authentication1.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
const Register = () => {
  const navigate=useNavigate()
  const {createUser,updateUserProfile}=useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit=data=>{
  console.log(data);
  createUser(data.email,data.password)
  .then(async(result)=>{
    updateUserProfile(data.name,data.photoURL)
    .then(async()=>{
      const userInfo={
        name:data.name,
        email:data.email
      }

      const fetchData=await axios.post(`${import.meta.env.VITE_BASE_URL}/users`,userInfo)
       .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Registration success",
            showConfirmButton: false,
            timer: 1500
          });
        }
       })
      
    })
   
    navigate('/')
   
  })
  .catch(err=>{
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: `${err.message}`,
      showConfirmButton: false,
      timer: 1500
    });
  })
}
  
    return (
        <div>
             <div className="hero shadow-xl  bg-base-200 w-[80%] mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img src={loginLogo} alt="" />
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input  type="text" {...register('name', { required: true })} placeholder="Your Name" className="input input-bordered" />

          {errors.name&& <p className=' text-red-600'>Name is required</p>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered"/>
          {errors.email && <p className=' text-red-600'>Email required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="url" {...register('photoURL', { required: true })} placeholder="your photo url" className="input input-bordered" />
          {errors.photoURL && <p className=' text-red-600'>photoURL is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" />
        {errors.password && <p className=' text-red-600'>Password is required</p>}
        </div>
     
        <div className="form-control mt-6">
          <button className="btn bg-[#D1A054] text-white">Register</button>
          <p className='text-center text-[#D1A054] font-semibold'>Already have account? <Link to='/login' className=' underline'>Login</Link></p>
        </div>
      
      </form>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;