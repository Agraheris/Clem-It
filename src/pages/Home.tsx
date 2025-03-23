import Img1 from "../assets/Img1.png"
import background from "../assets/background.png"
import Service from "../components/Service"
import Who from "../components/Who"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})`, opacity: 0.2 }}
      />
      <section className="relative z-10">
        <img src={Img1} alt="header" className="w-full h-auto" />
        <Who />
        <Service />
        <Contact />
      </section>
    </>
  );
}
export default Home