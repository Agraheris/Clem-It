import Cards from "./Cards";
import Test from "../assets/nuage.png";

interface ServiceProps {
  onOpenContact: () => void;
}

function Service({ onOpenContact }: ServiceProps) {
  const services = [
    {
      title: "Site Vitrine",
      description: "Boostez votre présence en ligne avec un site sur-mesure, rapide et accessible.",
      image: Test,
      tarif : 100,
    },
    {
      title: "E-commerce",
      description: "Vendez en ligne avec une boutique optimisée pour l'expérience utilisateur et la conversion.",
      image: Test,
      tarif : 100,
    },
    {
      title: "Application Web",
      description: "Une solution unique et performante adaptée aux besoins spécifiques de votre projet.",
      image: Test,
      tarif : 100,
    },
    {
      title: "Demande de Devis",
      description: "Un projet en tête ? Parlons-en pour définir la meilleure solution ensemble.",
      image: Test,
    },
  ];


  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          🚀 Des solutions web adaptées à vos besoins
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-left">
          Vous avez un projet web en tête ? Je conçois des solutions sur mesure...
        </p>
      </section>
      <div className="pb-16">
      <Cards items={services} onCardClick={onOpenContact} />
      </div>
    </>
  );
}

export default Service;
