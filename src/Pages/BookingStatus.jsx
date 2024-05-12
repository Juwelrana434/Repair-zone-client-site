import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../component/AuthProvider";
import BookingTable from "./BookingTable";

const BookingStatus = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
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
            
              {
               bookings.map(booking => 
              <BookingTable key={booking._id} booking={booking}></BookingTable>)
              
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingStatus;
