
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRout = ({children}) => {
// console.log(children);
const location = useLocation()
// console.log(location)
const { user, loading } = useContext(AuthContext);
  // console.log(user);
  // if(loading){
  // return <progress className="progress w-56"></progress>
  // }
  if (user) {
  return children
  }
   return <Navigate to="/login" state={location.pathname}></Navigate> 
    
};

export default ProtectedRout;