import React from "react";
import cross from "../../../assets/property/cross.png";
import "../listing.css";

const SelectLocation = ({ Location, setLocation, onLocationSelect }) => {
  function handleLocation() {
    setLocation(!Location);
  }

  return (
    <div
      className={`absolute lg:left-3 top-44 left-[-20px] flex lg:gap-3 z-50 ${
        Location ? "block" : "hidden"
      }`}
    >
      {/* <div>
        <img
          src={cross}
          alt="Close"
          onClick={handleLocation}
          className="cursor-pointer"
        />
      </div> */}

      <div>
        <div className="lg:w-[130px] md:min-w-[130px] md:max-w-full  w-screen bg-white text-black flex items-start flex-col justify-center rounded-lg shadow-md">
          {/* <p className="text-2xl font-medium py-2 flex items-center justify-center gap-4 ">
            Select City
          </p> */}
          <div className="flex flex-col items-center justify-around flex-wrap ">
            {["Lucknow", "Ayodhya", "Vellore", "Kota"].map((city) => (
              <h2
                key={city}
                className="h-8 w-35  sm:text-lg  text-lg font-medium rounded-lg flex items-center justify-center cursor-pointer p-6 "
                onClick={() => onLocationSelect(city)}
              >
                {city}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLocation;
