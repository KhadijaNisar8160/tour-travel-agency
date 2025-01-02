import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebasecConfig";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
const Hero = () => {
  const [priceValue, setPriceValue] = useState(30);
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Fetch destinations from Firebase (Directly from the Destination collection)
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Destination"));
        const destinationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDestinations(destinationsData);

        // Extract unique cities from the fetched destinations
        const uniqueCities = [
          ...new Set(destinationsData.map((destination) => destination.City)),
        ];
        setCities(uniqueCities);
      } catch (error) {
        console.error("Error fetching destinations:", error.message);
        toast.error("Failed to fetch destinations.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const PlacesData = {
    Place: filteredDestinations,
    image: "",
    Price: priceValue,
  };

  console.log(PlacesData);

  // Handle city change to filter destinations
  useEffect(() => {
    if (selectedCity) {
      const filtered = destinations.filter((destination) => {
        // Ensure 'city' exists and is a string before calling toLowerCase
        const destinationCity = destination.City || ""; // Fallback to empty string if City is undefined
        return destinationCity.toLowerCase() === selectedCity.toLowerCase();
      });
      setFilteredDestinations(filtered);
    } else {
      setFilteredDestinations(destinations); // Show all destinations if no city selected
    }
  }, [selectedCity, destinations]);

  // Handle form submission
  const handleSearch = async () => {
    if (!selectedCity || !selectedDate) {
      toast.error("Please fill out all fields!");
      return;
    }
    // Do something with the search data (like submitting to Firestore)
    toast.success("Search submitted!");
  };
  console.log(destinations);

  return (
    <div className="bg-black/20 h-full w-full">
      <div>
        <ToastContainer />
      </div>
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              {/* City Dropdown */}
              <div>
                <label htmlFor="city" className="opacity-70">
                  Select City
                </label>
                <select
                  id="city"
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="" disabled>
                    Select a city
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              {/* Date Input */}
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              {/* Price Range */}
              <div>
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Search Button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
              onClick={handleSearch}
            >
              Search Now
            </button>
          </div>

          {/* Display Filtered Destinations */}
          {/* <div className="mt-8 bg-white rounded-md p-4">
            {loading ? (
              <p>Loading destinations...</p>
            ) : destinations.length ? (
              destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer mb-4"
                >
                  <p className="text-2xl font-bold">{destination.Place}</p>
                  <div className="overflow-hidden">
                    <img
                      src={destination.image || "/default-image.jpg"}
                      alt={destination.title || "Destination"}
                      className="w-full h-48 object-cover rounded-t-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      ${destination.Price || "0"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No destinations found in Lahore.</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
