import cover from "/src/assets/cover.png";
import logo from "/src/assets/Logo.png";
const Cover = ({ title }) => {
  return (
    <div className="relative text-center">
      <img src={cover} className="w-full h-full" alt="cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <img src={logo} alt="" />
        <h1 className="text-5xl font-medium mb-2">{title}</h1>
        <h5>
          <span className="font-medium">Home &gt;</span> {title}
        </h5>
      </div>
    </div>
  );
};

export default Cover;
