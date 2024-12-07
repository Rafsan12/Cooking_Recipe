import HeroImg from "../../assets/Card Image/Mask Group.png";
import Chicken from "../../assets/Icon/ForkKnife.png";
import Time from "../../assets/Icon/Vector.png";

export default function Hero() {
  return (
    <>
      <div className="hero bg-[#E7FAFE] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <img
            src={HeroImg}
            className="max-w-sm rounded-lg"
            alt="Hero Section Image"
          />
          <div>
            <h1 className="text-6xl font-bold">
              Spicy Delicious
              <br />
              Chicken Wings
            </h1>
            <p className="py-6">
              Savor the taste of perfectly seasoned wings, crafted to ignite
              your senses et a id nisi.
            </p>
            <div className="flex gap-4 ">
              <div className=" bg-[#E4E6F1] flex items-center gap-2 border rounded px-4 py-2">
                <img src={Time} alt="Time Icon" />
                <span>30 Minutes</span>
              </div>
              <div className="bg-[#E4E6F1] flex items-center gap-2 border rounded px-4 py-2">
                <img src={Chicken} alt="Time Icon" />
                <span>Chicken</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
