import ContactImg from "../../assets/Image/Group 13936.png";

export default function Contact() {
  return (
    <>
      <h1 className="text-5xl text-center mt-12">Contact Us</h1>
      <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center  px-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={ContactImg}
            alt="Contact Us"
            className="max-w-full rounded-md shadow-lg"
          />
        </div>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg ml-32">
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
          <div className="col-span-1 md:col-span-2">
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
          <div className="col-span-1 md:col-span-2">
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
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="10"
              cols="65"
              className="p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className=" bg-black text-white py-2 rounded px-6"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
