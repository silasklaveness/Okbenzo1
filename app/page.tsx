import Image from "next/image";
import Link from "next/link";
import Calender from "./components/Calender";
import Kart from "./components/Kart";
import Button from "./components/Button";

<div className="h-24" />;

export default function Home() {
  return (
    <main
      className="bg-center bg-cover"
      style={{
        backgroundImage: "url('/pics/background.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="h-24" />
      <div className="container mx-auto px-6 py-4 bg-white shadow-md rounded-lg mb-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              Velkommen til okBenzo - Sandefjords frisør
            </h1>
            <div className="mt-6 text-gray-700">
              <h2 className="text-xl font-bold mb-2">Åpningstider</h2>
              <ul>
                <li>
                  <span className="font-bold">Mandag-fredag:</span> 09:00 -
                  18:00
                </li>
                <li>
                  <span className="font-bold">Lørdag:</span> 09:00 - 15:00
                </li>
                <li>
                  <span className="font-bold">Søndag:</span> Stengt
                </li>
              </ul>
            </div>
            <br></br>
            <Button />
            <br />
            <p className="text-gray-600 text-sm mt-2">
              Ring oss på:{" "}
              <a href="tel:+4798000000" className="text-black font-medium">
                123-456-789
              </a>
            </p>
          </div>
          <div className="md:w-1/2 text-center mt-6 md:mt-0">
            <p className="text-gray-600 font-bold">Kirkegata 3211 Sandefjord</p>
            <Kart />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-center">
        <div className="rounded-lg shadow-md h-[800px] w-[600px]">
          <Calender url="https://calendly.com/pokesilas/bestill-time" />
        </div>
      </div>
    </main>
  );
}
