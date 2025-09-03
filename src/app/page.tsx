import Hero from "../../Components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="mt-12 sm:px-16 px-6 py-4 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
      </div>
    </div>
  );
}
