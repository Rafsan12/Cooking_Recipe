import SubscribeImg from "../../assets/Image/Mask Group (1).png";

export default function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative p-6 sm:p-10 text-center max-w-4xl">
        <div className="relative">
          <img
            src={SubscribeImg}
            alt="Salad Image"
            className="w-full max-h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 sm:p-10">
            <h1 className="font-bold mb-4 lg:text-white sm:text-black text-2xl sm:text-3xl md:text-4xl text-center">
              Deliciousness to your inbox
            </h1>
            <p className="text-gray-900 mb-6 text-sm sm:text-base md:text-lg text-center">
              Subscribe for mouthwatering recipes and cooking tips delivered
              straight to you!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="p-3 rounded-lg w-full max-w-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
