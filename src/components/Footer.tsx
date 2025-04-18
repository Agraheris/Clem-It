import { FaLinkedin, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import Logo from "../../public/assets/Logo.webp"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-2xl">
        <p className="text-center text-2 md:text-left">
          © {new Date().getFullYear()} Vigouroux Clément — Tous droits réservés.
          <br/>
          Siret 94111475300010
        </p>
        <img src={Logo} className="w-32"/>
        <div className="flex gap-6 text-4xl">
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-vigouroux-41b23a151/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/clem.it.systems/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@clem_it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaTiktok />
          </a>
          <a
          href="https://github.com/Agraheris"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
          >
          <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
