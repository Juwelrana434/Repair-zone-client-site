import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    useEffect(() => {
      document.title = "Login";
      })
  const {loginUser, googleLogin, setUser, user} = useContext(AuthContext) // github login
  
  // email password sign in
    const handleLogin = (e) => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      // console.log(email, password)
      loginUser(email, password)
      };
      const handleGoogleLogin = async() => {
      
        await googleLogin()
            // toast.success('successfully logged in');
            // navigate("/")
            // .then(result => setUser(result.user))
      try {
        await googleLogin()
        toast.success('successfully logged in');
        navigate("/")
      } catch (err) {
      console.log(err)
      toast.error(err?.message)
      }
      
     }
      useEffect(() =>{
      if(user){
        navigate(location.state)
      }
      },[user])
      // show/hide password confirmation
      const [showPasWord, setShowPasWord]= useState(false);
    return (
        <div>
            <div className="hero min-h-screen bg-white my-4">
  <div className="flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl text-xl font-bold text-center">Please Login</h1>
      
    </div>
    <div className="shadow-2xl bg-base-100 mt-2">
      <form onSubmit={handleLogin} className="my-2 px-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
            <span onClick={ () => setShowPasWord(!showPasWord)} className="absolute top-[50px] right-12">
                { 
                 showPasWord ? <FaRegEye /> :<FaRegEyeSlash />
                 
                 }</span>
          </label>
          <input name='password' type={ showPasWord ? "text" :"password"} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button type = "submit" className="btn btn-primary">Login</button>
          <div>
        <div className="flex justify-center items-center border-2 border-blue-500 rounded-md my-4">
          <FcGoogle />
          <button className="ml-2" onClick={handleGoogleLogin}>Login with google</button>
        </div>
        {/* <div className="text-black flex justify-center items-center border-2 border-black rounded-md mb-4">
        <FaGithub />
          <button className="ml-2" onClick={handleGitHubLogin}>Login with Github</button>
        </div> */}
      </div>
          <h1 className='text-center pb-2'>Don't Have An Account ?<Link to='/register'> <span className='text-[#2aaa46]'>Register</span></Link></h1>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;