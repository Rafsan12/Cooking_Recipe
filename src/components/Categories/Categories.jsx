import Item1 from "../../assets/Item/Group 836.png";
import Item2 from "../../assets/Item/Group 837.png";
import Item3 from "../../assets/Item/Group 838.png";
import Item4 from "../../assets/Item/Group 839.png";
import Item5 from "../../assets/Item/Group 840.png";
import Item6 from "../../assets/Item/Group 841.png";
export default function Categories() {
  return (
    <>
      <div className="flex justify-between mt-2 ml-10 font-bold">
        <h1 className="text-3xl">Categories</h1>
        <h1 className="mr-10 bg-[#E4E6F1] mt-2 p-2 text-md">
          View All Categories
        </h1>
      </div>
      <div className="flex justify-around items-center mt-2">
        <img src={Item1} alt="" />
        <img src={Item2} alt="" />
        <img src={Item3} alt="" />
        <img src={Item4} alt="" />
        <img src={Item5} alt="" />
        <img src={Item6} alt="" />
      </div>
    </>
  );
}
