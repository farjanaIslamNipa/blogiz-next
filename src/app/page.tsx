import LatestBlogs from "@/components/latestBlogs/LatestBlogs";
import Header from "@/components/shared/Header";

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/blogs', {
    next: {
      revalidate: 30
    }
  })
  const blogs = await res.json()

  return (
    <>
      <Header />
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
