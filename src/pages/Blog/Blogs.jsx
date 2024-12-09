import { useEffect, useState } from "react";
import Subscribe from "../../components/Subscribe/Subscribe";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("/blog.json");
        const data = await res.json();
        console.log(data);
        setBlogs(data);
        // setFilteredBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  // Function to handle search
  // const handleSearch = () => {
  //   const query = searchQuery.toLowerCase();
  //   const results = blogs.filter((blog) =>
  //     blog.title.toLowerCase().includes(query)
  //   );
  //   setFilteredBlogs(results);
  // };

  return (
    <>
      <div className="text-center mt-6">
        <h1 className="text-5xl text-slate-800 font-medium">Blog & Article</h1>
        <p className="mt-4 text-xl">
          Stay informed with the latest insights, stories, and trends
        </p>
        <div className="mt-6">
          <input
            className="px-44 py-2 border border-slate-900 rounded-full"
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <button
            className="ml-2 border border-gray-700 px-4 bg-gray-600 py-1 text-white rounded-2xl"
            onClick={handleSearch}
          >
            Search
          </button> */}
        </div>
      </div>
      <div className="mt-10">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <Blog key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-xl text-gray-500">No blogs found</p>
        )}
      </div>
      <Subscribe />
    </>
  );
}
