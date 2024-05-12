import { useEffect, useState } from "react";
import ServicesCard from "./../assets/ServicesCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0,6)));
  }, []);
  
  return (
    <div>
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
