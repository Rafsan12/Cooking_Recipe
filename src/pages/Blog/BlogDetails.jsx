import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("/blog.json"); // Fetch JSON file
        const result = await res.json();
        // Find the blog that matches the ID from useParams
        const selectedBlog = result.find((item) => item.id === parseInt(id));
        setBlog(selectedBlog); // Set blog state
      } catch (error) {
        console.error("Error fetching blog:", error); // Log fetch error
      }
    };

    fetchBlog();
  }, [id]); // Re-run effect when ID changes

  return (
    <>
      {/* Blog details */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold">{blog?.title}</h1>
        <div className="flex justify-center gap-4 mt-4">
          <p>{blog?.author}</p>
          <p>{blog?.posted_date}</p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full md:w-1/2 lg:w-1/3 h-auto"
            src={blog?.img2}
            alt="Responsive Image"
          />
        </div>
      </div>

      {/* Blog content */}
      {blog?.content?.length > 0 ? (
        blog.content.map((c, i) => (
          <div key={i} className="mt-6">
            <h2 className="text-2xl font-bold ml-4">{c?.title}</h2>
            <p className="text-gray-700 mt-2 ml-8">{c?.details}</p>
          </div>
        ))
      ) : (
        <p className="text-center mt-6 text-gray-500">No content available.</p>
      )}
    </>
  );
}
