
import { useEffect} from "react";
import Carousel from './../component/Carousel';
import PopularServices from './PopularServices';
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
 
  //
  return (
    <div>
    <div className="mx-4"><Carousel></Carousel></div>
    <h1 className="text-center text-lime-900 text-3xl font-bold my-10"> Most Popular Services</h1>
    <h1>Quality Service is Our Guarantee</h1>
    <PopularServices></PopularServices>
    <div className="mx-auto text-center"><button className="btn btn-primary">Show All</button></div>
      
    </div>
  );
};

export default Home;
