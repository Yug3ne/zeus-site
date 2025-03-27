import { blog } from "../lib/types"

const BlogCard = ({blog}: {blog:blog}) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border overflow-hidden border-gray-800">
              <img
                src={blog.image}
                alt="Person lifting weights"
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <div className="text-gray-500 mb-2">May 3, 2021</div>
                <h3 className="text-white text-xl font-bold mb-6">
                  {blog.desc}
                </h3>
                <a
                  href="#"
                  className="inline-block border border-white text-white px-6 py-2 hover:bg-[#e7e1e1] hover:text-black"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
  )
}

export default BlogCard