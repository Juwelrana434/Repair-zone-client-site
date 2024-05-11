const ServicesCard = ({ service }) => {
  const {
    service_image,
    service_name,
    service_description,
    service_provider,
    service_price,
  } = service;
  return (
    <div>
      <div className="grid lg:md:grid-cols-2 gap-6 my-4 border-2 rounded-lg p-4">
        <div>
          <img
            src={service_image}
            className="w-full h-full my-4"
          />
        </div>
        <div>
          <h1>{service_name}</h1>
          <h1>{service_description}</h1>
          {/* <h1>{service_provider.name}</h1> */}
          <h1>{service_price}</h1>
          <div className="flex justify-between items-end"><button className="btn btn-primary">View Details</button>
          <button className="btn btn-primary">Show All</button></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
