import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Lahore",
    description:
      "Lahore, a city rich in history and culture, is home to several iconic landmarks that reflect its glorious past. The Badshahi Mosque, one of the largest in the world, and the **Lahore Fort**, a UNESCO World Heritage Site, showcase the grandeur of Mughal architecture. The serene Shalimar Gardens and the historic Jahangir's Tomb offer glimpses into the Mughal era's beauty and legacy. Minar-e-Pakistan, a symbol of Pakistan's independence, stands tall in the city, while the **Walled City of Lahore** and Liberty Market offer a vibrant blend of tradition and modernity. Other significant sites like Hiran Minar, Rang Mahal, and the Lahore Museum further enhance Lahore's appeal as a cultural and historical hub, making it a must-visit destination for those interested in exploring the rich heritage of Pakistan.",
    author: "Hira Abbasi",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in Karachi",
    description:
      "Karachi, Pakistan's bustling metropolis, boasts a blend of cultural, historical, and modern attractions. The iconic Quaid's Mausoleum honors Pakistan's founder, while Clifton Beach offers a scenic coastal retreat. The Karachi Marina Club and Manora Island are popular spots for relaxation, while the National Museum of Pakistan showcases the country's rich heritage. Frere Hall, with its Victorian architecture, and the Mohatta Palace highlight the city’s colonial past. Empress Market and Zainab Market provide vibrant shopping experiences, while the Karachi Harbor and Port Grand offer spectacular views of the Arabian Sea, making Karachi a dynamic mix of history, culture, and contemporary life.",
    author: "Ali Nawaz",
    date: "May 10, 2023",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Islamabad",
    description:
      "Islamabad, the capital city of Pakistan, is known for its serene beauty and modern architecture. The Faisal Mosque, one of the largest mosques in the world, stands as a symbol of the city’s charm, while the nearby Daman-e-Koh offers breathtaking panoramic views of the city. The lush greenery of Shakarparian Park and the peaceful Rawal Lake provide perfect spots for relaxation and outdoor activities. Pakistan Monument, representing the four provinces, and the adjacent Museum of Pakistan offer a glimpse into the country's rich history and culture. Lok Virsa Museum showcases traditional arts, while Margalla Hills National Park invites nature lovers with its hiking trails and wildlife.",
    author: "Khadija Nisar",
    date: "June 5, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
