import BlogCard from "../components/blogCard";
import { blog } from "../lib/types";

const BlogSection = () => {
  const blogs: blog[] = [
    {
      id: 1,
      image: "/images/benchPress.jpg",
      desc: "HOW WE GET MOTIVATED BEFORE CLASS",
    },
    {
      id: 2,
      image: "/images/femaleBoxer.jpg",
      desc: "5 REASONS WHY BOXING WILL HELP YOU REACH YOUR FITNESS GOALS",
    },
    {
      id: 3,
      image: "/images/box.jpg",
      desc: "THE MENTAL HEALTH BENEFITS OF BOXING",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 border-b-[0.1px] border-gray-400">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-6 h-0.5 bg-yellow-500 mr-3"></div>
          <span className="text-yellow-500">BLOG</span>
        </div>

        <h2 className="text-white text-4xl font-bold mb-12">BLOG & EVENTS</h2>

        {/* Blog Cards */}

        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
