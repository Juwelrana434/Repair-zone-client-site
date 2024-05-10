import Swal from "sweetalert2";


import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";

const TourSpotUpdate = () => {
const {id} = useParams()
    useEffect(() => {
        document.title = "Tour Spot Update";
        })
const tourUpdate = useLoaderData();
    const { photo, spot_name, country_name, location, short_description, average_cost,seasonality,travel_time,email, name,total_visitor } = tourUpdate
    const handleUpDateTouristSpots = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const spot_name = form.spot_name.value; // Fixed typo
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitor = form.total_visitor.value;
        // const email = user.email;
        const name = form.name.value;
        
    
        const upDateTouristSpot = { photo, spot_name, country_name, location, short_description, average_cost,seasonality,travel_time,email, name,total_visitor }; // Fixed property name
        console.log(upDateTouristSpot);
        
        // send to server
        
        fetch(`https://dream-destination-server.vercel.app/Tourist/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(upDateTouristSpot )
        })
        .then(res => res.json())
        .then(data =>{
         console.log(data)
         if(data.modifiedCount > 0){ 
          Swal.fire({
            title: 'Success!',
            text: 'Tour spot update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
         }
         
         
         }) 
        
      };
    return (
        <div>
             <div className="m-10 bg-[#6074f2] text-black">
        <h1 className="text-center pt-6 text-[45px]">Update Tourist Spot </h1>

        <form onSubmit={handleUpDateTouristSpots}>
          <div className="grid lg:md:grid-cols-2 gap-6">
            <div>
              <label>Image</label>
              <br />
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL)"
                className="w-full p-2 mt-4"
              />
              <label>Tourist Spot Name</label>
              <br />
              <input
                type="text"
                name="spot_name"
                placeholder="Enter Tourist Spot Name"
                className="w-full p-2 mt-4"
              />
              <br />
              <select type="text"
                name="country_name" // Fixed input name
                placeholder="Enter Country Name"
                className="w-full p-2 mt-4">
                    <option>Bangladesh</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Vietnam</option>
                    <option>Cambodia</option>
              </select>
              <br />
              <label>Location</label>
              <br />
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="w-full p-2 mt-4"
              />
              <br />
              <label>Short description</label>
              <br />
              <input
                type="text"
                name="short_description"
                placeholder="Enter short description"
                className="w-full p-2 mt-4"
              />
            </div>
            <div>
              
              <label>Average cost</label>
              <br />
              <input
                type="number"
                name="average_cost"
                placeholder="Enter average cost"
                className="w-full p-2 mt-4"
              />
              <br />
              <label>Seasonality</label>
              <br />
              <input
                type="text"
                name="seasonality" // Fixed input name
                placeholder="Enter seasonality -like summer, winter"
                className="w-full p-2 mt-4"
              />
              <br />
              <label>Total Visitor Per Year</label>
              <br />
              <input
                type="number"
                name="travel_time" // Fixed input name
                placeholder="Enter total visitors per year => like- 10000"
                className="w-full p-2 mt-4"
              />
              <label>Travel Time</label>
              <br />
              <input
                type="number"
                name="total_visitor" // Fixed input name
                placeholder="Enter travel_time => like- 7 days"
                className="w-full p-2 mt-4"
              />
              <label>User Email</label>
              <br />
              <input
              readOnly
                type="email"
                name="email" // Fixed input name
                placeholder="@example.com"
                className="w-full p-2 mt-4"
              />
            </div>
          </div>
          <label>User Name</label>
          <br />
          <input
            type="text"
            name="user"
            placeholder="Enter Your name"
            className="w-full p-2 mt-4"
          />
          <input type="submit" value="Update Tourist Spot" className="w-full btn btn-primary" />
        </form>
      </div>
        </div>
    );
};

export default TourSpotUpdate;