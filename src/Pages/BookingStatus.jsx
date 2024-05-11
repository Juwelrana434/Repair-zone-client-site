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
           <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {bookings.map((booking) => (
          <div key={booking._id}>
          <div className="card w-full bg-base-100 shadow-xl lg:md:p-6 p-2">
 <img src={booking.photo} className="h-96 rounded-xl" />
 <div className="card-body">
   <h2 className="card-title">{booking.serviceName}</h2>
   <p>{booking.instruction}</p>
   <h1 className="text-xl font-bold"> Price: {booking.price}</h1>
   <div className="card-actions justify-end">
   
   </div>
 </div>
</div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default BookingStatus;