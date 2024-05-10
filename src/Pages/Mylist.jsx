import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TourSpotUpdate from "./TourSpotUpdate";


const Mylist = () => {
  useEffect(() => {
    document.title = "My List";
    })
    const { user, logOut } = useContext(AuthContext);
    const [tourspots, setTourSpots] = useState([]);
    // const [afterdelete, setDelete] = useState(tourspots);
    // console.log(tourspots)
    
    // my list data delete
    const handleDelete = _id => {
    console.log(_id, "delete")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dream-destination-server.vercel.app/Tourist/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log("delete conform");
              // const remain = tourspots.filter(to =>to._id ==_id);
              // setDelete(remain);
              
            }
          });
      }
    });
    };
    
    // my list data read 
    useEffect(() => {
    fetch(`https://dream-destination-server.vercel.app/Tourist/email/${user?.email}`)
    .then(res => res.json())
    .then((data) => {
    setTourSpots(data)})
    },[user]);
    return (
        <div>
          
      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="w-full">
          <tr className="W-full">
            <div className="w-full grid grid-cols-5 text-xl font-bold"><th>Tourist spot</th>
            <th>Country</th>
            <th>Average cost</th>
            <th>Seasonality</th>
            <th colSpan={2}>Action</th></div>
          </tr>
        </thead>
       
        <tbody className="w-full">
        <tr className="bg-base-200">
        
        {
      tourspots.map((tour) => <div key={tour.id}>
          {/* row 1 */} 
          {/* use map here  */}
          
            {/* <th>1</th> */}
            <div className="grid grid-cols-5 gap-2 w-full  my-4 px-4"><h1>{tour.spot_name}</h1>
            <h1>{tour.country_name}</h1>
            <h1> ${tour.average_cost}</h1>
            <h1>{tour.seasonality}</h1>
           <div className="grid grid-cols-2 gap-2"> <h1 className="mr-10"><Link to={`/update/${tour._id}`}>
                      <button className="btn btn-success w-full">
                        Update
                      </button>
                    </Link></h1>
            
            <h1>
                      <button 
                      onClick={() => handleDelete(tour._id)}
                      className="btn btn-error w-full">
                        Delete
                      </button>
                    </h1></div></div>
            
                    </div>)
      }
      
          </tr>
          {/* row 2 */}
          {/* <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            
          </tr> */}
          {/* row 3 */}
          {/* <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            
          </tr> */}
        
     
    
      </tbody>
      </table>
      </div>
      <div>
      {/* {
      tourspots.map(tourupdate => <TourSpotUpdate 
      key={tourupdate._id}
      tourupdate={tourupdate}
      ></TourSpotUpdate> )
      } */}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {tourspots.map((tourspot) => (
          <div key={tourspot.id}>
            <div className="card bg-base-100 shadow-xl">
              <div className="w-full mb-4">
                <img
                  src={tourspot.photo}
                  className="w-full h-[280px] border-2 rounded-md border-gray-100 p-4 shadow-md"
                />
              </div>
              <div className="">
                <h2 className="card-title my-2 px-4">
                  {tourspot.spot_name}
                </h2>
                <div className="flex justify-between items-center px-4">
                  <p>{tourspot.travel_time} person</p>
                  <p className="p-4"> Travel Time :{tourspot.total_visitor} Day</p>
                </div>
                <div className="flex justify-between items-center px-4">
                  <p>Average cost : ${tourspot.average_cost} /person</p>
                  <p className="p-4">seasonality:{tourspot.seasonality} </p>
                </div>
                <div className="card-actions justify-end ">
                  <div className="w-full my-4 px-4">
                    <Link to={`/tourspot/${tourspot._id}`}>
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Mylist;