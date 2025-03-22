import Test from "../assets/nuage.png"

const Cards: React.FC = () => {
  return (
    <div>
        <img src={Test} alt="" />
        <div className="Text">
            <h2>Titre</h2>
            <p> Nulla maximus cursus lectus vitae facilisis. Aliquam erat volutpat. Curabitur id tincidunt purus. Pellentesque tempor interdum neque, ut ultrices nisi hendrerit sed. Sed varius ac libero quis egestas. Integer vitae felis nec risus egestas aliquam vitae ut erat. Duis vel diam leo</p>
        </div>
    </div>
  )
}

export default Cards