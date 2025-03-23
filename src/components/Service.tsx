import Cards from "./Cards";
import Test from "../assets/nuage.png";

function Service() {
  type Service = {
    title: string;
    description: string;
    image: string;
  };

  const services: Service[] = [
    {
      title: "Site Vitrine",
      description:
        "Boostez votre présence en ligne avec un site sur-mesure, rapide et accessible.",
      image: Test,
    },
    {
      title: "E-commerce",
      description:
        "Vendez en ligne avec une boutique optimisée pour l'expérience utilisateur et la conversion.",
      image: Test,
    },
    {
      title: "Application Web",
      description:
        "Une solution unique et performante adaptée aux besoins spécifiques de votre projet.",
      image: Test,
    },
    {
      title: "Demande de Devis",
      description:
        "Un projet en tête ? Parlons-en pour définir la meilleure solution ensemble.",
      image: Test,
    },
  ];

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          🚀 Des solutions web adaptées à vos besoins
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-600 text-left max-w-3xl mx-auto">
          <p>
            Vous avez un projet web en tête ? Que ce soit pour une{" "}
            <strong className="font-semibold text-gray-800">présence en ligne impactante</strong>, une{" "}
            <strong className="font-semibold text-gray-800">boutique e-commerce performante</strong> ou une{" "}
            <strong className="font-semibold text-gray-800">application sur-mesure</strong>, je conçois des solutions
            adaptées à vos objectifs.
          </p>
          <p>
            Mon approche repose sur la{" "}
            <strong className="font-semibold text-gray-800">personnalisation</strong> et{" "}
            <strong className="font-semibold text-gray-800">l’accessibilité</strong>, pour garantir une
            expérience utilisateur optimale à tous.
          </p>
          <p className="pt-2 text-gray-800 font-medium text-lg">👉 Découvrez mes services et trouvons ensemble la solution qui vous correspond.</p>
        </div>
      </section>

      <div className="px-4">
        <Cards items={services} />
      </div>
    </>
  );
}

export default Service;
