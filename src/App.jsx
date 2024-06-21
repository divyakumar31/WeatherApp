import React, { useState } from "react";
import data from "./assets/data.json";
import Navbar from "./components/Navbar";

const App = () => {
  const [formInput, setFormInput] = useState("");

  const handleForm = (e) => {
    if (e.target.value !== " ") {
      setFormInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Fetch data from API
  };

  return (
    <div className="grid grid-cols-[4fr_1.25fr]">
      <div className="p-5 font-medium flex justify-between items-center h-fit">
        <div>
          <h1 className="text-3xl">{data.location.name}</h1>
          <p className="text-2xl">
            <span>📌</span> {data.location.region}
          </p>
        </div>
        <form className="font-normal w-3/12 relative" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name..."
            className="py-2.5 rounded-md bg-[#f3f7f7] placeholder:text-black outline-none w-full pl-4 pr-10"
            required
            onChange={handleForm}
          />
          <span
            className="absolute right-4 top-2.5 cursor-pointer"
            onClick={handleSubmit}
          >
            🔍
          </span>
        </form>
      </div>
      <Navbar data={data} />
    </div>
  );
};

export default App;
