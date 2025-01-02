import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify"; // If you want to show a success/error message
import { db } from "../../FirebasecConfig";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  // State for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Function to handle form submission
  const handleBooking = async () => {
    // Check if any required field is empty
    if (!name || !email || !address) {
      toast.error("Please fill in all the fields.");
      return;
    }

    try {
      // Add data to Firebase Firestore Booking collection
      const bookingRef = collection(db, "Booking");
      await addDoc(bookingRef, {
        name,
        email,
        address,
        timestamp: new Date(),
      });

      // Show success message
      toast.success("Your booking has been successfully placed!");

      // Clear form and close popup
      setName("");
      setEmail("");
      setAddress("");
      setOrderPopup(false);
    } catch (error) {
      console.error("Error adding booking:", error);
      toast.error("Failed to place booking.");
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button
                  onClick={handleBooking} // Call the function to submit data
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
