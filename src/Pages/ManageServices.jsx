import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ManageServices = () => {
  useEffect(() => {
    document.title = "My List";
  });
  const { user } = useContext(AuthContext);
  const [addServices, setAddServices] = useState([]);
  //   const [afterdelete, setDelete] = useState(tourspots);
  //   console.log(tourspots)

  // my add service  data delete
  const handleDelete = (id) => {
    // console.log(id, "delete");
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
        fetch(`http://localhost:5000/addServices/${id}`, {
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
              const remain = addServices.filter(
                (addService) => addService._id !== id
              );
              setAddServices(remain);
            }
          });
      }
    });
  };

  //   my add services data read
  useEffect(() => {
    fetch(`http://localhost:5000/addService/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAddServices(data);
      });
  }, [user]);
  // console.log(addServices);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="w-full">
            <tr className="W-full">
              <div className="w-full grid lg:md:grid-cols-5 text-xl font-bold">
                <th>Services Image</th>
                <th>Services Name</th>
                <th>Cost</th>
                <th>Location</th>
                <th colSpan={2}>Action</th>
              </div>
            </tr>
          </thead>

          <tbody className="w-full">
            <tr className="bg-base-200">
              {addServices.map((addService) => (
                <div key={addService.id}>
                  {/* row 1 */}
                  {/* use map here  */}

                  {/* <th>1</th> */}
                  <div className="grid grid-cols-5 gap-2 w-full  my-4 px-4">
                    <img
                      src={addService.service_image}
                      className="w-20 h-20 rounded-full"
                    />
                    <h1>{addService.service_name}</h1>
                    <h1> ${addService.service_price}</h1>
                    <h1>{addService.location}</h1>
                    <div className="grid grid-cols-2 gap-2">
                      {" "}
                      <h1 className="mr-10">
                        <Link to={`/update/${addService._id}`}>
                          <button className="btn btn-success w-full">
                            Update
                          </button>
                        </Link>
                      </h1>
                      <h1>
                        <button
                          onClick={() => handleDelete(addService._id)}
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
    </div>
  );
};

export default ManageServices;
