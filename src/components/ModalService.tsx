interface ModalServiceProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
      title: string;
      objectif: string;
      ideal: string;
      features: string; // on le transforme ici
      delai: string;
    };
  }
  
  const ModalService: React.FC<ModalServiceProps> = ({ isOpen, onClose, service }) => {
    if (!isOpen) return null;
  
    const features = service.features.split(";").map((f) => f.trim());
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p className="mb-2"><strong>Objectif :</strong> {service.objectif}</p>
          <p className="mb-2"><strong>Idéal pour :</strong> {service.ideal}</p>
          <p className="font-semibold mb-2">Fonctionnalités incluses :</p>
          <ul className="list-disc list-inside mb-4">
            {features.map((feat, index) => <li key={index}>{feat}</li>)}
          </ul>
          <p className="mb-2"><strong>Délai estimé :</strong> {service.delai}</p>
  
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Fermer
          </button>
        </div>
      </div>
    );
  };
  
  export default ModalService;
  