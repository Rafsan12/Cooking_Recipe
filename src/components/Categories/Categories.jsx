import Item1 from "../../assets/Item/Group 836.png";
import Item2 from "../../assets/Item/Group 837.png";
import Item3 from "../../assets/Item/Group 838.png";
import Item4 from "../../assets/Item/Group 839.png";
import Item5 from "../../assets/Item/Group 840.png";
import Item6 from "../../assets/Item/Group 841.png";

export default function Categories() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mt-2 ml-4 sm:ml-10 font-bold">
        <h1 className="text-2xl sm:text-3xl">Categories</h1>
        <h1 className="mr-4 sm:mr-10 bg-[#E4E6F1] mt-2 p-2 text-sm sm:text-md cursor-pointer">
          View All Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center items-center mt-4 mx-4">
        <img src={Item1} alt="Category 1" className="w-20 sm:w-24 md:w-28" />
        <img src={Item2} alt="Category 2" className="w-20 sm:w-24 md:w-28" />
        <img src={Item3} alt="Category 3" className="w-20 sm:w-24 md:w-28" />
        <img src={Item4} alt="Category 4" className="w-20 sm:w-24 md:w-28" />
        <img src={Item5} alt="Category 5" className="w-20 sm:w-24 md:w-28" />
        <img src={Item6} alt="Category 6" className="w-20 sm:w-24 md:w-28" />
      </div>
    </>
  );
}
