import ContactImg from "../../assets/Image/Group 13936.png";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";

export default function Contact() {
  return (
    <>
      <h1 className="text-5xl text-center mt-12">Contact Us</h1>
      <div className="mt-8 flex flex-col lg:flex-row gap-6  items-center px-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={ContactImg}
            alt="Contact Us"
            className="max-w-full rounded-md"
          />
        </div>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-40 w-full max-w-lg">
          {/* First Name */}
          <div>
            <label className="block mb-1 ml-2" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-600 px-4 py-2 rounded w-full"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 ml-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              className="border border-gray-600 px-4 py-2 rounded w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block mb-1 ml-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-600 px-4 py-2 rounded w-full"
              required
            />
          </div>

          {/* Subject */}
          <div className="col-span-2">
            <label className="block mb-1 ml-2" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter Subject..."
              className="border border-gray-600 px-4 py-2 rounded w-full"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
}
