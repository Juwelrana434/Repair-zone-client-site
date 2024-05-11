import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
const service = useLoaderData();
const {
    service_image,
    _id,
    service_name,
    service_description,
    service_provider,
    service_price,
  } = service;
//   console.log(service_provider?.image)
    return (
        <div>
            {/* <div className="grid lg:md:grid-cols-3 gap-6 my-4 border-2 rounded-lg p-4">
        
        <div>
          <img src={service_image} className="w-full lg:md:h-[400px] h-[300px] my-4" />
        </div>
        <div>
          <h1>{service_name}</h1>
          <h1>{service_description}</h1>
          
            
         
        </div>
        <div><h1>{service_provider?.name}</h1>
          <img src={service_provider?.image} alt="" />
          <h1>{service_price}</h1>
        <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book Now</button></Link></div>
        
      </div> */}
      <div className="grid lg:md:grid-cols-2 gap-6 my-4 border-2 rounded-lg p-4">
     
      <div className="card w-full bg-base-100 shadow-xl">
  <img src={service_image} />
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{service_description}</p>
    <h1>{service_price}</h1>
    <div className="card-actions justify-end">
    <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
<div className="card w-full bg-base-100 shadow-xl">
  <img src={service_provider?.image}  />
  <div className="card-body">
    <h2 className="card-title">{service_provider?.name}</h2>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default ServiceDetails;