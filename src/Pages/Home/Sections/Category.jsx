import "./HomeSection.css";
import bedroom from "/assets/bedroom.png";
import living from "/assets/living.png";
import dining from "/assets/dining.png";
const Category = () => {
  return (
    <div className="my-16 text-center ">
      <h1 className="lg:text-3xl font-bold">Browse The Range</h1>
      <p className="lg:text-xl mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex gap-8 justify-center py-6 text-white">
        <div className="categoryImg ">
          <div className="group relative overflow-hidden w-full">
            <img
              className="rounded-lg cursor-pointer"
              src={dining}
              alt="dining"
            />
            <p className="font-semibold bg-black/40 rounded-lg absolute z-50 flex items-center group-hover:opacity-100 group-hover:duration-700 opacity-0 duration-700 justify-center inset-0 lg:text-2xl">
              Dining
            </p>
          </div>
        </div>
        <div className="categoryImg ">
          <div className="group overflow-hidden relative">
            <img
              className="rounded-lg cursor-pointer"
              src={living}
              alt="living"
            />
            <p className="font-semibold bg-black/40 rounded-lg absolute z-50 flex items-center group-hover:opacity-100 group-hover:duration-700 opacity-0 duration-700 justify-center inset-0 lg:text-2xl">
              Living
            </p>
          </div>
        </div>
        <div className="categoryImg ">
          <div className="group overflow-hidden relative">
            <img
              className="rounded-lg cursor-pointer"
              src={bedroom}
              alt="bedroom"
            />
            <p className="font-semibold bg-black/40 rounded-lg absolute z-50 flex items-center group-hover:opacity-100 group-hover:duration-700 opacity-0 duration-700 justify-center inset-0 lg:text-2xl">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
