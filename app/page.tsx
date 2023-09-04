import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main
      className=""
    >
            <video
        className="w-full h-screen object-cover"
        src={"/back.mp4"}
        autoPlay
        loop
        muted
      />

<div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 text-center">
      <Navbar />
      <Hero />
      </div>
    </main>
  );
}
