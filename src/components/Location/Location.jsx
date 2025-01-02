import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Location = () => {
  return (
    <>
      <Navbar />
      <span id="location"></span>
      <section data-aos="fade-up" className="mt-32">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to Visit
          </h1>

          <div className="rounded-xl">
            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57264.67235824181!2d71.6905775021642!3d29.39564496465324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922619ff59e0a15%3A0x25c9140c4c32ddba!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700902186385!5m2!1sen!2s"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Location;
