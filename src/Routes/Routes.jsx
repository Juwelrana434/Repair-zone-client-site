import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRout from "../component/ProtectedRout/ProtectedRout";
import Mylist from "./../Pages/Mylist";
import AllTouristSpot from "../Pages/AllTouristSpot";
import TourSpotUpdate from "../Pages/TourSpotUpdate";
import Bangladesh from "../Pages/Bangladesh";
import AddServices from './../Pages/AddServices';
import ServiceDetails from './../Pages/ServiceDetails';
import BookingServices from './../Pages/BookingServices';

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
        loader: () =>
          fetch(
            "https://dream-destination-server.vercel.app/Tourist/"
          ),
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
        path: "/mylist",
        element: (
          <ProtectedRout>
            <Mylist></Mylist>
          </ProtectedRout>
        ),
      },
      {
        path: "/alltourist",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () =>
          fetch(
            "https://dream-destination-server.vercel.app/Tourist"
          ),
      },
      {
        path: "/update/:id",
        element: <TourSpotUpdate></TourSpotUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://dream-destination-server.vercel.app/Tourist/email/${params.id}`
          ),
      },
      {
        path: "/bangladesh/:country",
        element: <Bangladesh></Bangladesh>,
        loader: ({ params }) =>
          fetch(
            `https://dream-destination-server.vercel.app/Tourist/country/${params.country}`
          ),
      },
    ],
  },
]);
export default router;
