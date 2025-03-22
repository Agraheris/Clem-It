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
      <section>
        <h2>🚀 Des solutions web adaptées à vos besoins</h2>
        <p>
          Vous avez un projet web en tête ? Que ce soit pour une{" "}
          <strong>présence en ligne impactante</strong>, une{" "}
          <strong>boutique e-commerce performante</strong> ou une{" "}
          <strong>application sur-mesure</strong>, je conçois des solutions
          adaptées à vos objectifs. Mon approche repose sur la{" "}
          <strong>personnalisation et l’accessibilité</strong>, pour garantir une
          expérience utilisateur optimale à tous.
        </p>
        <p>👉 Découvrez mes services et trouvons ensemble la solution qui vous correspond.</p>
      </section>
      <Cards items={services} />  {/* Utilisation du même composant pour 'services' */}
    </>
  );
}

export default Service;
