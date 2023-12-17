import "./HomeSection.css";
import bedroom from "/assets/bedroom.png";
import living from "/assets/living.png";
import dining from "/assets/dining.png";
const Category = () => {
  return (
    <div className="my-16 text-center">
      <h1 className="lg:text-3xl font-bold">Browse The Range</h1>
      <p className="lg:text-xl mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex gap-8 justify-center py-6">
        <div className="categoryImg ">
          <div className="overflow-hidden">
            <img
              className="rounded-lg overflow-hidden cursor-pointer hover:scale-105 hover:rounded-lg"
              src={dining}
              alt="dining"
            />
          </div>
          <p className="font-semibold lg:text-2xl mt-4">Dining</p>
        </div>
        <div className="categoryImg ">
          <div className="overflow-hidden">
            <img
              className="rounded-lg cursor-pointer"
              src={living}
              alt="living"
            />
          </div>
          <p className="font-semibold lg:text-2xl mt-4">Living</p>
        </div>
        <div className="categoryImg ">
          <div className="overflow-hidden">
            <img
              className="rounded-lg cursor-pointer"
              src={bedroom}
              alt="bedroom"
            />
          </div>
          <p className="font-semibold lg:text-2xl mt-4">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
