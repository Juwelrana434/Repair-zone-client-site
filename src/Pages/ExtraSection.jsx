import image from "../../src/assets/ima.jpg";
import { GiAlarmClock } from "react-icons/gi";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { ImManWoman } from "react-icons/im";
const ExtraSection = () => {
  return (
    <div className="m-4">
      <div className="grid lg:md:grid-cols-2">
        <div>
          <img src={image} className="w-full h-full" />
        </div>
        <div className=" bg-[#eb4a62]">
        <h1 className="text-white font-bold text-xl ml-10 mt-10">THE TECH REPAIR EXPERTS</h1>
        <h1 className="text-white font-bold text-2xl ml-10 my-4">Why Choose Us?</h1>
          <div>
          <h1 className="text-center text-xl font-bold text-white">Fast Repairs</h1>
            <div className="flex justify-start items-center my-4"><div className="mx-8"><GiAlarmClock className="bg-white text-[50px] text-[#eb4a62] rounded-full p-2" /></div>
            
            <h1 className="text-left text-white font-semibold">
              In my role as a provider of fast repair services, I am dedicated
              to delivering prompt, reliable, and high-quality solutions that
              address client needs efficiently
            </h1></div>
            <h1 className="text-center text-xl font-bold text-white">Affordable Prices</h1>
            <div className="flex justify-start items-center my-4"><div className="mx-8"><HiOutlineCurrencyBangladeshi className="bg-white text-[50px] text-[#eb4a62] rounded-full p-2" /></div>
            
            <h1 className="text-left text-white font-semibold">
            Offering affordable prices as a service provider is crucial for
              attracting and retaining customers while maintaining
              competitiveness in the market. Here is how I approach pricing to
              ensure affordability without compromising on quality or service
            </h1></div>
            <h1 className="text-center text-xl font-bold text-white">Qualified Staff</h1>
            <div className="flex justify-start items-center mt-4 mb-8"><div className="mx-8"><ImManWoman className="bg-white text-[50px] text-[#eb4a62] rounded-full p-2" /></div>
            
            <h1 className="text-left text-white font-semibold">
            Having a team of qualified staff is essential for delivering
              reliable and high-quality services as a provider. Here is how I
              ensure that my staff is well-trained, skilled, and capable of
              meeting the needs of our customers
            </h1></div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
