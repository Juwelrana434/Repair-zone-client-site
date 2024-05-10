
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRout = ({children}) => {
// console.log(children);
const location = useLocation()
// console.log(location)
const { user } = useContext(AuthContext);
  // console.log(user);
  if (user) {
  return children
  }
   return <Navigate to="/login" state={location.pathname}></Navigate> 
    
};

export default ProtectedRout;