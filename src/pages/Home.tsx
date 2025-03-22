import Img1 from "../assets/Img1.png"
import Service from "../components/Service"
import Who from "../components/Who"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
    <img src={Img1} />
    <Who />
    <Service />
    <Contact />
    </>
  )
}

export default Home