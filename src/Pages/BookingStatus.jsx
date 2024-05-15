import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../component/AuthProvider";
import { Link } from "react-router-dom";

const BookingStatus = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://repair-zone-server-side.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  // console.log(bookings);
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
                <th colSpan={2}>Status</th>
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
                    <img src={booking.photo} className="w-20 h-20 rounded-full"/>
                    <h1 className="animate__animated animate__bounce">{booking.serviceName}</h1>
                    <h1 className="animate__animated animate__bounce"> ${booking.price}</h1>
                    <h1 className="animate__animated animate__bounce">{booking.providerEmail}</h1>
                    <div className="grid grid-cols-2 gap-2">
                      {" "}
                      <h1 className="mr-10">
                        <Link to={`/update/${booking._id}`}>
                          <button className="btn btn-success w-full">
                            Working
                          </button>
                        </Link>
                      </h1>
                      <h1>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="btn btn-error w-full"
                        >
                          pending
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
    </div>
  );
};

export default BookingStatus;
