import CustomFilter from "../../Components/CustomFilter";
import Hero from "../../Components/Hero";
import SearchBar from "../../Components/SearchBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mt-12 sm:px-16 px-6 py-4 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        {/* SearchBar div */}
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
        </div>
        {/* Custom SearchBar  */}
        <div className="flex justify-start flex-wrap items-center gap-2">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
    </div>
  );
}
