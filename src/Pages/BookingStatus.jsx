import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../component/AuthProvider';


const BookingStatus = () => {
const {user} = useContext(AuthContext);
const [bookings, setBookings] = useState([]);
const url = `http://localhost:5000/booking?email=${user?.email}`
useEffect(() =>{
fetch(url)
.then(res => res.json())
.then(data => setBookings(data))
},[]);
console.log(bookings);
    return (
        <div>
           
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
      
      
      
    </tbody>
    
    
  </table>
</div>
      </div>
    
    );
};

export default BookingStatus;

// {bookings.map((booking) => (
//     <div key={booking._id}>
//     <div className="card w-full bg-base-100 shadow-xl lg:md:p-6 p-2">
// <img src={booking.photo} className="h-96 rounded-xl" />
// <div className="card-body">
// <h2 className="card-title">{booking.serviceName}</h2>
// <p>{booking.instruction}</p>
// <h1 className="text-xl font-bold"> Price: {booking.price}</h1>
// <div className="card-actions justify-end">

// </div>
// </div>
// </div>
//     </div>
//   ))}