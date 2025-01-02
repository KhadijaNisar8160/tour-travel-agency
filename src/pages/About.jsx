import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <Navbar />
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to <span className="font-bold">Travellogo</span> your
            trusted travel partner dedicated to creating unforgettable
            experiences. We are a passionate team of travel enthusiasts who
            believe that exploring the world isn’t just a journey; it’s a way to
            connect, learn, and grow. With years of experience in the travel
            industry, we specialize in crafting tailor-made itineraries,
            providing exceptional service, and ensuring every trip is nothing
            short of extraordinary. Whether you’re seeking thrilling adventures,
            serene getaways, or cultural immersions, we’re here to turn your
            travel dreams into reality.
          </p>
          <p>
            <h1 className="font-bold  text-2xl ">Our Mission </h1>
            At Travellogo our mission is simple: To inspire, guide, and deliver
            exceptional travel experiences that bring joy, wonder, and memories
            that last a lifetime.
          </p>

          <p>
            <h1 className="font-bold  text-2xl">Why Choose Us?</h1>
            <div>
              <span className="font-semibold text-xl">
                1. Personalized Experiences:
              </span>
              We take the time to understand your preferences and design
              journeys that resonate with your unique interests .
            </div>
            <div>
              <span className="font-semibold text-xl">2. Expert Guidance:</span>
              Our team of seasoned travel experts is well-versed in destinations
              worldwide, ensuring you get the best recommendations and insights.
            </div>
            <div>
              <span className="font-semibold text-xl">
                3. Seamless Planning:
              </span>
              From booking flights and accommodations to arranging guided tours
              and activities, we handle all the details so you can relax and
              enjoy.
            </div>
            <div>
              <span className="font-semibold text-xl">4. 24/7 Support:</span>
              Your peace of mind is our priority. We’re here to assist you at
              every step of your journey.
            </div>
            <h1 className="font-bold text-2xl">What We Offer </h1>
            <div>
              <span className="font-semibold text-xl">
                Domestic and International Tours:
              </span>
              Explore iconic destinations across the globe.
            </div>
            <div>
              <span className="font-semibold text-xl">Adventure Travel:</span>
              From trekking to scuba diving, we cater to the thrill-seekers.
            </div>
            <div>
              <span className="font-semibold text-xl">Luxury Escapes:</span>
              Indulge in the finest accommodations and exclusive experiences.
            </div>
            <div>
              <span className="font-semibold text-xl">
                Cultural Immersions:
              </span>
              Immerse yourself in the traditions and histories of fascinating
              locales.
            </div>
            <div>
              <span className="font-semibold text-xl">Family Holidays: </span>
              Fun-filled trips that cater to all age groups.
            </div>
            <h1 className="font-bold text-2xl">
              Our Commitment to Sustainability
            </h1>
            We believe in responsible tourism and strive to minimize the
            environmental impact of our operations. By partnering with
            eco-friendly accommodations and promoting local businesses, we aim
            to support sustainable practices that benefit the destinations we
            love.
            <h1 className="font-bold text-2xl">
              Let’s Create Memories Together
            </h1>
            At <span className="font-bold ">Travellogo </span>we don’t just sell
            trips—we craft stories that you’ll cherish forever. Whether it’s
            your first international getaway or an annual family vacation, we
            promise to make every journey remarkable. Contact us today to begin
            your next adventure! --- Would you like to include any additional
            services, testimonials, or specific company achievements? Let me
            know! 😊
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
      <Footer />
    </>
  );
};

export default About;
