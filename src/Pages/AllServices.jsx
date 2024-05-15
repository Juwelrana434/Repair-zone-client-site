import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../App.css";

const AllServices = () => {
  useEffect(() => {
    document.title = "Services";
    })
  const [addServices, setAddServices] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  // console.log(count);
  useEffect(() => {
    fetch(`https://repair-zone-server-side.vercel.app/addServices?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setAddServices(data));
  }, [currentPage]);
  // console.log(addServices);
  // const [itemsPerPage, setItemsPerPage] = useState(2);
  // const [currentPage, setCurrentPage] = useState(0);
  // const { count } = useLoaderData();
  // console.log(count);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handlePage = (e) => {
    const val = parseInt(e.target.value);
    // console.log(val);
    setItemsPerPage(val);

    // const handlePre = () => {
    //   if (currentPage > 0) {
    //     setCurrentPage(currentPage - 1);
    //   }
    // };
  };
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
        {/* <h1>current page {currentPage}</h1> */}
        {/* <button>Previous</button> */}
        {pages.map((page) => (
          <button
            className="mx-6 my-10"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        {/* <button>next</button> */}
        <select value={itemsPerPage} onChange={handlePage} className="ml-10">
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
