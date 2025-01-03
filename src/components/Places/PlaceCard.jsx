import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// Adjust the path to your Firebase config
import { db } from "../../FirebasecConfig";

const PlaceCard = ({ image, Price, Place, handleOrderPopup }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityPlaces = async () => {
      try {
        setLoading(true);

        // Reference to the City document under the Destination collection
        // If you have multiple cities, this approach will need adjustment
        const citySubcollection = collection(db, "Destination", "City");

        // Fetch all documents in the "Places" subcollection under "City" document
        const querySnapshot = await getDocs(citySubcollection);

        // Map through the documents and extract data
        const fetchedPlaces = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // This will extract all fields in the "Place" document
        }));

        console.log("Fetched Places:", fetchedPlaces); // Debugging log
        setPlaces(fetchedPlaces);
      } catch (error) {
        console.error("Error fetching city places:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCityPlaces();
  }, []);
  console.log(places);

  // Render loading state or the fetched places
  return (
    <>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching data
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {places.map((place) => (
            <div
              key={place.id}
              className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
              onClick={() => handleOrderPopup(place)}
            >
              <div className="overflow-hidden">
                <img
                  src={place.image || "/default-image.jpg"} // Fallback image if place.image is not provided
                  alt={place.name || "No image"}
                  className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-2 p-3">
                <h1 className="line-clamp-1 font-bold text-xl">
                  {place.Place}
                </h1>

                <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                  <div>
                    <p className="text-2xl font-bold">${place.Price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PlaceCard;
