import { useState } from "react";
import Img1 from "../assets/Img1.png";
import background from "../assets/background.png";
import Service from "../components/Service";
import Who from "../components/Who";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})`, opacity: 0.2 }}
      />

      <section className="relative z-10">
      <div
  className="relative w-full bg-cover bg-center h-[30vh] md:h-[40vh] flex items-center justify-center"
  style={{ backgroundImage: `url(${Img1})` }}
>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative text-center px-4 z-10">
    <h1 className="text-3xl md:text-5xl lg:text-9xl font-extrabold text-white drop-shadow-md">
      Clément Vigouroux
    </h1>
    <h2 className="text-2xl md:text-4xl lg:text-8xl font-bold text-white drop-shadow-md">
      Développeur Web
    </h2>
    <h3 className="text-xl md:text-3xl lg:text-7xl font-semibold text-white drop-shadow-md">
      Indépendant
    </h3>
  </div>
</div>
        
        <Who />
        <Service onOpenContact={handleOpenContact} />
      </section>

      <button
        onClick={handleOpenContact}
        className={`
          fixed top-1/4 right-4 z-30 transform -translate-y-1/2
          origin-right rotate-[-90deg] bg-indigo-600 text-white
          px-4 py-2 rounded-t-lg shadow-md hover:bg-indigo-700
          transition duration-300
          ${showContact ? 'translate-x-full' : ''}
        `}
      >
        📬 Contact
      </button>

      {showContact && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleCloseContact}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          showContact ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleCloseContact}
            className="text-gray-600 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="px-4 pb-10">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
