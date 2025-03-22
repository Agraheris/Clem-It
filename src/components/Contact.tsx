

function Contact() {
  return (
    <>
    <h2>Contact</h2>
    <form >
    <div>
        <label> Nom et prénom </label>
        <input 
        type="text"
        id="Nom_Prenom"
        />
    </div>
    <div>
        <label> Votre E-mail </label>
        <input
        type="email"
        id="Email"
        />
    </div>
    <div>
        <label> Objet de la demande </label>
        <input 
        type="text"
        id="object"/>
    </div>
    <div>
        <label> Votre message </label>
        <input 
        type="text"
        id="Message" />
    </div>
    </form>
    </>
  )
}

export default Contact