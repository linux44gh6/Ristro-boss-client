import { useContext, useEffect, useRef, useState } from 'react';
import loginLogo from '../assets/others/authentication1.png'
// eslint-disable-next-line no-unused-vars
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGithub, FaGoogle } from "react-icons/fa";
import axios from 'axios';
const Login = () => {
  const location=useLocation()
  const from=location.state
  const navigate=useNavigate()
    const [disabled,setDisabled]=useState(true)
    const {singIn,googleLogIn}=useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const captchRef=useRef()
    const handleToValid=(e)=>{
        e.preventDefault()
        const value=captchRef.current.value
        if(validateCaptcha(value)==true){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    const handleToLogIn=e=>{
      e.preventDefault()
      const form=e.target
       const email=form.email.value
       const password=form.password.value
       console.log(email,password);
       singIn(email,password)
       .then(()=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from)
       })
       .catch(err=>{
        console.log(err);
       })
    }
    const handtoToGoogleLogin=()=>{
      googleLogIn()
      .then(async res=>{
      const  userInfo={
          email:res.user.email,
          name:res.user.displayName
        }
        console.log(userInfo);
        const data=await axios.post(`${import.meta.env.VITE_BASE_URL}/users`,userInfo)
        .then(result=>{
          console.log(result);
          navigate('/')
        })
      })
    }
    return (
        <div>
            <div className="hero shadow-xl  bg-base-200 w-[80%] mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
        <img src={loginLogo} alt="" />
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleToLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
        </div>
        <div className="form-control">
        <LoadCanvasTemplateNoReload />
       
          <input ref={captchRef} type="text" name='captcha' placeholder="type the code" className="input input-bordered" required />
          <button onClick={handleToValid} className=' bg-slate-600 text-white mt-2'>validate</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn bg-[#D1A054] text-white">Login</button>
          <p className='text-center text-[#D1A054] font-semibold'>New here? <Link className=' underline' to='/register'>Create a New Account</Link></p>
        </div>
        <div>
            <p className=' text-center'>or login with</p>
            <div className='flex justify-center gap-5'>
            <FaGoogle onClick={handtoToGoogleLogin} className='text-4xl border border-black rounded-full p-1'></FaGoogle>
            <FaGithub className='text-4xl border border-black rounded-full p-1'></FaGithub>
           
            </div>
            
        </div>
      </form>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;