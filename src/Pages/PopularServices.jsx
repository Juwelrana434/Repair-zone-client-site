import { useEffect, useState } from "react";
import ServicesCard from "./../assets/ServicesCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://repair-zone-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);

  return (
    <div className="max-w-[1270px] mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-500">Popular Services</h2>
        <p className="text-gray-600 mt-2">Check out some of our most popular services</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {services.map((service) => (
          <ServicesCard 
            key={service._id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
