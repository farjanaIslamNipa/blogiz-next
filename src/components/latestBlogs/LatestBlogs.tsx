import {TBlog} from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs } : {blogs: TBlog[]}) => {

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">Latest Blogs from <span className="text-accent">Blogiz</span></h1>
      <div className="grid grid-cols-2 gap-4 my-5">
        {
          blogs.slice(0, 2).map((blog: TBlog) => <LatestBlogCard key={blog?.id} blog={blog} />)
        }
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
          blogs.slice(2, 5).map((blog: TBlog) => <BlogCard key={blog?.id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;