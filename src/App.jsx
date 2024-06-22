import data from "./assets/data.json";
import {
  Navbar,
  CityLocation,
  CityInput,
  MeasureCard,
} from "./components/components";

const App = () => {
  return (
    <div className="grid grid-cols-[4fr_1.25fr]">
      <div>
        <div className="p-5 font-medium flex justify-between items-center h-fit">
          <CityLocation />
          <CityInput />
        </div>
        <div className="mt-5 px-5 flex items-center justify-evenly gap-5 h-[300px]">
          {/* Card Section */}
          {/* Card 1 */}
          <div className="w-full p-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-red-200 flex flex-col gap-4 h-full shadow-lg shadow-slate-500">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full w-10 h-10 text-center p-2">
                <i className="fa-solid fa-cloud" aria-hidden="true"></i>
              </div>
              <div>
                <h2 className="font-semibold">weather</h2>
                <p>what's weather today.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-5xl my-2">
                33.33°<code>c</code>
              </h3>
              <p className="font-medium">Mist</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <MeasureCard
                classes={`bg-slate-800 text-white`}
                measure={"pressure"}
                value={"1000mb"}
              />
              <MeasureCard
                classes={`bg-emerald-600 text-white`}
                measure={"visibility"}
                value={"3.2km"}
              />
              <MeasureCard
                classes={`bg-white`}
                measure={"humidity"}
                value={"53%"}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full p-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-cyan-50 flex flex-col gap-5 h-full shadow-lg shadow-slate-500 justify-center">
            {/* Small Card 1 */}
            <div className="bg-slate-800 text-white rounded-xl p-5">
              <h2 className="text-sm">Sunrise & Sunset</h2>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <img src="" alt="DM" />
                  <div>
                    <p className="text-sm">Sunrise</p>
                    <p className="font-medium">06:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src="" alt="DM" />
                  <div>
                    <p className="text-sm">Sunset</p>
                    <p className="font-medium">06:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-slate-800 text-white rounded-xl p-5 flex items-center">
              <img src="" alt="DM" />
              <div className="flex flex-col ml-2">
                <p className="text-sm">
                  1 UVI{" "}
                  <button className="py-2 px-4 rounded-full bg-green-400 text-black font-medium cursor-default ml-2">
                    Good
                  </button>
                </p>
                <p className="font-medium">Good risk of from UV rays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Section */}
        <div className="text-2xl p-5 mt-5 font-medium">
          How's the temperature today at?
          <div className="mt-5 p-5 rounded-3xl bg-gradient-to-br from-cyan-200 to-sky-200 grid grid-cols-12 overflow-scroll scrollbar-none gap-2">
            {data.forecast.forecastday[0].hour.map((item, index) => (
              // change this card
              <MeasureCard
                classes={`bg-slate-800 text-white h-24`}
                measure={"any"}
                value={item.temp_c}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Navbar data={data} />
    </div>
  );
};

export default App;
