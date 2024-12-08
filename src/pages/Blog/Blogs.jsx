import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("/blog.json");
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
      <div className="text-center mt-6">
        <h1 className="text-5xl text-slate-800 font-medium">Blog & Article</h1>
        <p className="mt-4 text-xl">
          Stay informed with the latest insights, stories, and trends
        </p>
        <div className="mt-6">
          <input
            className="px-12 py-2 border border-slate-900 rounded-full"
            type="text"
          />
          <input
            className="ml-2 border border-gray-700 px-2 bg-gray-600 py-1 text-white rounded-2xl"
            type="button"
            value="Submit"
          />
        </div>
      </div>
      <div className="mt-10">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}
