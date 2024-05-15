import 'animate.css';
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const {
    service_image,
    _id,
    location,
    service_name,
    service_description,
    service_provider,
    service_price,
  } = service;
  return (
    <div className="">
      <div className="grid lg:md:grid-cols-2 gap-6 my-4  p-4 m-4">
     
     <div className="card w-full bg-base-100 shadow-xl lg:md:p-6 p-2">
 <img src={service_image} className="h-96 rounded-xl" />
 <div className="card-body h-52">
   <h2 className="card-title animate__rollIn animate__bounce">{service_name}</h2>
   <p>{service_description}</p>
   <h1 className="text-xl font-bold"> Price: {service_price}</h1>
   <div className="card-actions justify-end">
   <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
   </div>
 </div>
</div>
<div className="card w-full bg-base-100 shadow-xl lg:md:p-6 p-2">
 <img src={service_provider?.image} className="h-96 rounded-xl" />
 <div className="card-body">
   <h2 className="card-title"> Service Provider  {service_provider?.name}</h2>
   
   <div className="card-actions justify-end">
     
   </div>
 </div>
</div>
</div>
        
      
      
    </div>
  );
};

export default ServicesCard;
