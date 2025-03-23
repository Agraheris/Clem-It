function Contact() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
      <form className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="Nom_Prenom" className="block text-sm font-medium text-gray-700">Nom et prénom</label>
          <input
            type="text"
            id="Nom_Prenom"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Votre E-mail</label>
          <input
            type="email"
            id="Email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="object" className="block text-sm font-medium text-gray-700">Objet de la demande</label>
          <input
            type="text"
            id="object"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Message" className="block text-sm font-medium text-gray-700">Votre message</label>
          <textarea
            id="Message"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default Contact;
