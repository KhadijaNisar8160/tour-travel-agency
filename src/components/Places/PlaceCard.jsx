import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// Adjust the path to your Firebase config
import { db } from "../../FirebasecConfig";
const PlaceCard = ({
  image,

  Price,
  Place,
  handleOrderPopup,
}) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore for Lahore subcollection
  useEffect(() => {
    const fetchLahorePlaces = async () => {
      try {
        setLoading(true);
        // Reference to the subcollection "Places" inside the document "Lahore" under the "Destination" collection
        const lahoreSubcollection = collection(
          db,
          "Destination",
          "Lahore",
          "Places"
        );

        // Fetch all documents in the "Places" subcollection
        const querySnapshot = await getDocs(lahoreSubcollection);

        // Map through the documents and extract data
        const fetchedPlaces = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Fetched Places:", fetchedPlaces); // Debugging log
        setPlaces(fetchedPlaces);
      } catch (error) {
        console.error("Error fetching Lahore places:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLahorePlaces();
  }, []);

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{Place}</h1>

          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div>
              <p className="text-2xl font-bold">{Price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
