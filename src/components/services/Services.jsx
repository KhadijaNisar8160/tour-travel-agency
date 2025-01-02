import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Services = () => {
  function showDetails(serviceType) {
    const details = {
      customized:
        "We create personalized travel packages tailored to your interests and preferences.",
      booking:
        "Book flights and accommodations effortlessly with our professional support.",
      guided:
        "Enjoy guided tours with local experts who know the best spots and hidden gems.",
    };

    alert(details[serviceType]);
  }
  return (
    <div>
      <Navbar />
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="service bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              // onClick="showDetails('customized')"
              onClick={() => showDetails("customized")}
            >
              <h3 className="text-xl font-semibold mb-4">
                Customized Tour Packages
              </h3>
              <p>Tailor-made travel experiences for every type of traveler.</p>
            </div>

            <div
              className="service bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => showDetails("booking")}
            >
              <h3 className="text-xl font-semibold mb-4">
                Flight and Accommodation Booking
              </h3>
              <p>Hassle-free bookings for your flights and stays.</p>
            </div>

            <div
              className="service bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => showDetails("guided")}
            >
              <h3 className="text-xl font-semibold mb-4">
                Guided Tours and Excursions
              </h3>
              <p>Explore iconic landmarks with our expert guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <script>
        function showDetails(serviceType) {
            const details = {
                customized: "We create personalized travel packages tailored to your interests and preferences.",
                booking: "Book flights and accommodations effortlessly with our professional support.",
                guided: "Enjoy guided tours with local experts who know the best spots and hidden gems."
            };

            alert(details[serviceType]);
        }
    </script> */}
      <Footer />
    </div>
  );
};

export default Services;
