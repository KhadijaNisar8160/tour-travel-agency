import BlogsComp from "../components/Blogs/BlogsComp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Blogs = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <Navbar />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default Blogs;
