import { useEffect, useState } from "react";

const ServicesToDo = () => {
  useEffect(() => {
    document.title = "Services to do";
  });

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://repair-zone-server-side.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto">
      {services.map((service) => (
        <div key={service._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={service?.photo} className="p-4 w-full h-[280px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p>{service.serviceName}</p>
              <p>{service?.price}</p>
              <div className="card-actions justify-end">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 btn-primary"
                  >
                    Status
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>pending</a>
                    </li>
                    <li>
                      <a>Working</a>
                    </li>
                    <li>
                      <a>complete</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesToDo;
