import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristSpot = () => {
  useEffect(() => {
    document.title = "All Tourist Spot";
    })
 const tourists = useLoaderData();
 console.log(tourists);
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {tourists.map((tourspot) => (
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
                  <p>Average cost : ${tourspot.average_cost} </p>
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

export default AllTouristSpot;