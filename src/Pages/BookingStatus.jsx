import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../component/AuthProvider";
import BookingTable from "./BookingTable";
import { Link } from "react-router-dom";

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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="w-full">
            <tr className="W-full">
              <div className="w-full grid grid-cols-5 text-xl font-bold">
                <th>Services Image</th>
                <th>Services Name</th>
                <th>Cost</th>
                <th>Provider email</th>
                <th colSpan={2}>Action</th>
              </div>
            </tr>
          </thead>

          <tbody className="w-full">
            <tr className="bg-base-200">
              {bookings.map((booking) => (
                <div key={booking.id}>
                  {/* row 1 */}
                  {/* use map here  */}

                  {/* <th>1</th> */}
                  <div className="grid grid-cols-5 gap-2 w-full  my-4 px-4">
                    <img src={booking.photo} />
                    <h1>{booking.serviceName}</h1>
                    <h1> ${booking.price}</h1>
                    <h1>{booking.providerEmail}</h1>
                    <div className="grid grid-cols-2 gap-2">
                      {" "}
                      <h1 className="mr-10">
                        <Link to={`/update/${booking._id}`}>
                          <button className="btn btn-success w-full">
                            Update
                          </button>
                        </Link>
                      </h1>
                      <h1>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="btn btn-error w-full"
                        >
                          Delete
                        </button>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

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
            {bookings.map((booking) => (
              <BookingTable key={booking._id} booking={booking}></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingStatus;
