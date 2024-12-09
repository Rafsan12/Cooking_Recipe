import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Blog({ blog }) {
  const { id, img, title, author, posted_date, content } = blog;

  const previewDetails =
    content?.[0]?.details?.length > 200
      ? content[0].details.slice(0, 200) + "..."
      : content?.[0]?.details || "No details available";

  return (
    <div className="flex items-center border-b border-gray-300 py-4 ml-4">
      <div className="w-1/3">
        <img
          src={img}
          alt={`Image for blog: ${title}`}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-2/3 pl-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">
          {previewDetails}
          <Link to={`/blog/${id}`}>See More</Link>
        </p>

        <div className="mt-4 text-sm text-gray-500 flex gap-4">
          <p>{author}</p>
          <div className="border-l-2 border-gray-700 "></div>
          <p>{posted_date}</p>
        </div>
      </div>
    </div>
  );
}
