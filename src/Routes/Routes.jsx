import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRout from "../component/ProtectedRout/ProtectedRout";




import AddServices from './../Pages/AddServices';
import ServiceDetails from './../Pages/ServiceDetails';
import BookingServices from './../Pages/BookingServices';
import BookingStatus from './../Pages/BookingStatus';

Root;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
    
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addServices",
        element: (
          <ProtectedRout>
            <AddServices></AddServices>
          </ProtectedRout>
        ),
  
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRout>
            <ServiceDetails></ServiceDetails>
          </ProtectedRout>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/services/${params.id}`
          ),
      },
      {
        path: "/booking/:id",
        element: (
          <ProtectedRout>
            <BookingServices></BookingServices>
          </ProtectedRout>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/services/${params.id}`
          ),
      },
      
      {
        path: "/booked",
        element: (
          <ProtectedRout>
            <BookingStatus></BookingStatus>
          </ProtectedRout>
        ),
      },
    ],
  },
]);
export default router;
