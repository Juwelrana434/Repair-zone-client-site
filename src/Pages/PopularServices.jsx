import { useEffect, useState } from "react";
import ServicesCard from "./../assets/ServicesCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1>{services.length}</h1>
      <div>
        {services.map((service) => (
          <ServicesCard 
          key={service._id}
          service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
