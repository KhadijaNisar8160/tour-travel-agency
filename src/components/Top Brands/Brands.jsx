import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Brands = () => {
  return (
    <div>
      <Navbar />
      <section id="top-brands" className="py-40 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Top Travel Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="brand">
              <p className="mt-4 font-semibold text-black">Brand 1</p>
              <h1 className="mt-2 font-semibold text-[16px] text-gray-700">
                Gypsy Traces and Tours
              </h1>
              <a
                href="https://www.tourradar.com/o/gypsy-traces-and-tours"
                className="font-bold text-blue-600"
              >
                Visit this site
              </a>
            </div>

            <div className="brand">
              <p className="mt-4 font-semibold text-gray-700">Brand 2</p>
              <h1 className="mt-2 font-semibold text-[16px] text-gray-700">
                Exploria
              </h1>
              <a
                href="https://www.tourradar.com/o/exploria/tours"
                className="font-bold text-blue-600"
              >
                Visit this site
              </a>
            </div>

            <div className="brand">
              <p className="mt-4 font-semibold text-gray-700">Brand 3</p>
              <h1 className="mt-2 font-semibold text-[16px] text-gray-700">
                Intrepid Travel
              </h1>
              <a
                href="https://www.tourradar.com/o/intrepid/pakistan"
                className="font-bold text-blue-600"
              >
                Visit this site
              </a>
            </div>

            <div className="brand">
              <p className="mt-4 font-semibold text-gray-700">Brand 4</p>
              <h1 className="mt-2 font-semibold text-[16px] text-gray-700">
                Crossroads Adventure
              </h1>
              <a
                href="https://www.tourradar.com/o/crossroads-adventure"
                className="font-bold text-blue-600"
              >
                Visit this site
              </a>
            </div>

            <div className="brand">
              <p className="mt-4 font-semibold text-gray-700">Brand 5</p>
              <h1 className="mt-2 font-semibold text-[16px] text-gray-700">
                Rock Valley Tours Pvt Ltd
              </h1>
              <a
                href="tourradar.com/o/rock-valley-tours-pvt-ltd"
                className="font-bold text-blue-600"
              >
                Visit this site
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Brands;
