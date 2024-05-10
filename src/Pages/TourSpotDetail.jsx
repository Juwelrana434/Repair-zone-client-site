import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const TourSpotDetail = () => {
  useEffect(() => {
    document.title = "Tour spot Details";
    })
  const tourspot = useLoaderData();
  const { photo, spot_name, country_name, location, short_description, average_cost,seasonality,travel_time,email, name,total_visitor } = tourspot // Fixed property name
  console.log(tourspot);
  return (
    <div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 gap-6 bg-[#dde5f6]">
        <div
          className="border-2 rounded-md border-gray-100 p-4 shadow-md"
          id="left-side/up"
        >
          <img className="w-full h-full" src={tourspot?.photo} />
        </div>
        <div className="border-2 rounded-md border-gray-100 p-4 shadow-md">
        <h1 className="text-2xl font-bold"> <span>Name of Place  : </span>{tourspot.spot_name}</h1>
        <h1 className="text-xl font-medium"> Location : {tourspot.location}</h1>
        <h1 className="font-medium">{tourspot.short_description}</h1>
        
        {/* <h1 className="font-medium"> seasonality : {tourspot.seasonality[0]}, {tourspot.seasonality[1]}</h1> */}
        
        
        <h1 className="font-medium"> Travel Time : {tourspot.total_visitor} days</h1>
        <h1 className="font-medium"> Average Cost : ${tourspot.average_cost}/ person</h1>
        <h1 className="font-medium">Total Visitors Per Year :{tourspot.travel_time} person</h1>
        </div>
      </div>
    </div>
  );
};

export default TourSpotDetail;
