import SubscribeImg from "../../assets/Image/Mask Group (1).png";

export default function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="relative p-10 text-center">
        <div>
          <img src={SubscribeImg} alt="Salad Image" />
        </div>
        <div className="absolute top-36 left-1/3 ">
          <h1 className="font-bold mb-4 text-gray-800 text-4xl">
            Deliciousness to your inbox
          </h1>
          <p className="text-gray-600 mb-6">
            Subscribe for mouthwatering recipes and cooking tips delivered
            straight to you!
          </p>
          <div className="flex items-center justify-center space-x-3">
            <input
              type="email"
              placeholder="Your email address..."
              className="p-3 rounded-lg w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
