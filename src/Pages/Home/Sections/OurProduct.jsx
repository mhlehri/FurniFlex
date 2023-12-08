import image1 from "/src/assets/image1.png";
import image2 from "/src/assets/image2.png";
import image3 from "/src/assets/image3.png";
import image4 from "/src/assets/image4.png";
import image5 from "/src/assets/image5.png";
import image6 from "/src/assets/image6.png";
import image7 from "/src/assets/image7.png";
import image8 from "/src/assets/image8.png";
import Card from "./../../../Shared/Card/Card";
const OurProduct = () => {
  return (
    <div className="mb-20 text-center">
      <h1 className="lg:text-[40px] font-bold text-center mb-5">
        Our Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          image={image1}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image2}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image3}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image4}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image5}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image6}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image7}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
        <Card
          image={image8}
          name="Syltherine"
          price="Rp 2.500.000"
          type="Stylish cafe chair"
          dis="Rp 3.500.000"
        />
      </div>
      <button className="font-bold lg:py-3 hover:scale-95 duration-300 lg:px-10 text-[#B88E2F] hover:text-white hover:bg-[#B88E2F] bg-transparent border-2 my-8  border-[#B88E2F]">
        Show More
      </button>
    </div>
  );
};

export default OurProduct;
