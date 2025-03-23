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
        <img src={Img1} alt="header" className="w-full h-auto" />
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
