import Navbar from "../components/Navbar";

export default function RoutesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">


      <div className="absolute w-full h-screen text-center bg-black">
        <Navbar />
        {children}
      </div>
    </section>
  );
}
