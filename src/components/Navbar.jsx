import { Clock } from "./components";

const Navbar = ({ data }) => {
  const items = [1, 2, 3];

  return (
    <div className="bg-[#f3f7f7] h-screen p-5">
      <div className="pb-4">
        <Clock />
      </div>
      <div className="bg-[url(women_with_dog.jpg)] relative aspect-square bg-center backdrop-blur-sm my-4 p-4 rounded-lg w-full bg-cover">
        <h3 className="font-semibold text-2xl my-2">Air Quality</h3>
        <p className="my-2">Main Pollutant: XY2</p>
        <div className="w-8/12 font-medium my-2 absolute bottom-4 left-4">
          <p className="text-2xl my-2">
            30 <span className="text-base">AQI</span>
          </p>
          <p>Standard</p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="font-semibold text-2xl my-2">Weather Forecast</h3>
        <div className="cards-container flex flex-col gap-4 pt-2">
          {items.map((item) => (
            <div
              className="card grid grid-cols-[1fr_2fr_1fr] bg-white rounded-2xl p-2 py-4 text-xl shadow-lg shadow-gray-400 items-center gap-2"
              key={item}
            >
              <div>
                <img src="women_with_dog.jpg" alt={item} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gray-400 text-sm">Friday 21</div>
                <div className="font-semibold">
                  {data.current.condition.text}
                </div>
              </div>
              <div className="text-amber-500 font-semibold text-base">
                <div>30°C</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
