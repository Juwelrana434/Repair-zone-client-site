import 'animate.css';
import { useEffect} from "react";
import Carousel from './../component/Carousel';
import PopularServices from './PopularServices';
import { Link } from "react-router-dom";
import ExtraSection from './ExtraSection';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
 
  //
  return (
    <div>
    <div className="mx-4"><Carousel></Carousel></div>
    <h1 className="text-center text-lime-900 text-3xl font-bold my-10 animate__animated animate__lightSpeedInLeft"> Most Popular Services</h1>
    <PopularServices></PopularServices>
    <div className="mx-auto text-center"><Link to='/allServices'><button className="btn btn-primary">Show All</button></Link></div>
      <ExtraSection></ExtraSection>
      <ExtraOne></ExtraOne>
      <ExtraTwo></ExtraTwo>
    </div>
  );
};

export default Home;
