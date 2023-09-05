import Navbar from "../components/Navbar";

export default function RoutesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <video
        className="w-full h-screen object-cover"
        src={"/back.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/30 text-center">
        <Navbar />
        {children}
      </div>
    </section>
  );
}
