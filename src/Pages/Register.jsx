import loginLogo from '../assets/others/authentication1.png'
const Register = () => {
    return (
        <div>
             <div className="hero shadow-xl  bg-base-200 w-[80%] mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img src={loginLogo} alt="" />
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
        </div>
     
        <div className="form-control mt-6">
          <button className="btn bg-[#D1A054] text-white">Login</button>
          <p className='text-center text-[#D1A054] font-semibold'>New here? Create a New Account</p>
        </div>
        <div>
            <p className=' text-center'>or login with</p>
        </div>
      </form>
       
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;