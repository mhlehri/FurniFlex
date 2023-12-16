import gallery1 from "/src/assets/Gallery1.png";
import gallery2 from "/src/assets/Gallery2.png";
import gallery3 from "/src/assets/Gallery3.png";
import gallery4 from "/src/assets/Gallery4.png";
import gallery5 from "/src/assets/Gallery5.png";
import gallery6 from "/src/assets/Gallery6.png";
import gallery7 from "/src/assets/Gallery7.png";
import gallery8 from "/src/assets/Gallery8.png";
import gallery9 from "/src/assets/Gallery9.png";

const Share = () => {
  return (
    <div className="mt-20 overflow-hidden">
      <div className="space-y-2 text-center">
        <h4 className="lg:text-xl font-semibold">Share your setup with</h4>
        <h2 className="lg:text-[40px] font-bold">#FurniFlex</h2>
      </div>
      <div className="flex gap-10 overflow-hidden items-center shareGallery">
        <img src={gallery1} className="max-w-sm h-auto" alt="" />
        <img src={gallery2} className="max-w-sm h-auto" alt="" />
        <img src={gallery3} className="max-w-sm h-auto" alt="" />
        <img src={gallery4} className="max-w-sm h-auto" alt="" />
        <img src={gallery5} className="max-w-sm h-auto" alt="" />
        <img src={gallery6} className="max-w-sm h-auto" alt="" />
        <img src={gallery7} className="max-w-sm h-auto" alt="" />
        <img src={gallery8} className="max-w-sm h-auto" alt="" />
        <img src={gallery9} className="max-w-sm h-auto" alt="" />
      </div>
    </div>
  );
};

export default Share;
