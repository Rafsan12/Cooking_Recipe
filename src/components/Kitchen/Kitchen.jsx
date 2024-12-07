import KitchenImg from "../../assets/Image/Group 880.png";
export default function Kitchen() {
  return (
    <>
      <div className="hero  min-h-screen mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={KitchenImg} className="rounded-lg" />
          <div>
            <h1 className="text-4xl font-bold">
              Everyone Can Be a <br /> Chef in Their Own Kitchen
            </h1>
            <p className="py-6">
              Discover the joy of cooking with simple, step-by-step recipes that
              bring out the chef in you.
            </p>
            <button className="btn bg-black hover:bg-white hover:text-black btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
