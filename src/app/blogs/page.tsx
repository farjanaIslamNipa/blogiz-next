'use client'
import BlogCard from "@/components/ui/BlogCard";
import {useGetBlogsQuery} from "@/redux/api/baseApi";
import {TBlog} from "@/types";

const BlogPage = () => {
 
  const {data : blogs, isLoading, isError } = useGetBlogsQuery(undefined)

  // console.log(data, 'data')
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">All Blogs from <span className="text-accent">Blogiz</span></h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {
          blogs?.map((blog: TBlog) => <BlogCard key={blog?.id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default BlogPage;