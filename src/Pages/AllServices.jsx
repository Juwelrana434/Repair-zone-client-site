import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllServices = () => {
  const [addServices, setAddServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addServices")
      .then((res) => res.json())
      .then((data) => setAddServices(data));
  }, []);
  // console.log(addServices);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const { count } = useLoaderData();
  console.log(count);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handlePage = e =>{
  
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
        {addServices.map((addService) => (
          <div key={addService._id}>
            <div className="card w-full bg-base-100 shadow-xl lg:md:p-6 p-2">
              <img src={addService.service_image} className="h-96 rounded-xl" />
              <div className="card-body">
                <h2 className="card-title">{addService.service_name}</h2>
                <p>{addService.service_description}</p>
                <h1 className="text-xl font-bold">
                  {" "}
                  Price: {addService.service_price}
                </h1>
                <div className="card-actions justify-end">
                  <Link to={`/details/${addService._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        {pages.map((page) => (
          <button className="mx-6 my-10" key={page}>
            {page}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handlePage} name="" id="">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  );
};

export default AllServices;
