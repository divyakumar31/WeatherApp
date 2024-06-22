import { useState } from "react";

const CityInput = () => {
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
    <>
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
    </>
  );
};

export default CityInput;