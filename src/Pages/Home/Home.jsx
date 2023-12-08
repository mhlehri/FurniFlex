import Banner from "./Sections/Banner";
import Category from "./Sections/Category";
import Inspiration from "./Sections/Inspiration";
import OurProduct from "./Sections/OurProduct";
import Share from "./Sections/Share";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <OurProduct />
      <Inspiration />
      <Share />
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
