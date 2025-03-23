import Cards from "./Cards";
import Test from "../assets/nuage.png";

const Who: React.FC = () => {
  type Project = {
    title: string;
    description: string;
    image: string;
  };

  const projects: Project[] = [
    {
      title: "Spice Odyssey",
      description:
        "Plateforme de type Uber Eat, développée en HTML, CSS et JavaScript, réalisée en collaboration avec une équipe de 5 étudiants durant le bootcamp sur une période de 2 semaines.",
      image: Test,
    },
    {
      title: "Moodflix",
      description:
        "Application de recommandation de films basée sur l'humeur de l'utilisateur, construite avec HTML, CSS, ReactJS et l'API The Movie DB, développée en équipe de 3 étudiants sur 4 semaines.",
      image: Test,
    },
    {
      title: "Virtuart",
      description:
        "Site de musée virtuel intégrant une visite interactive et un aspect communautaire, développé avec HTML, CSS, ReactJS, Express et Phaser. Projet réalisé en équipe de 4 étudiants en 8 semaines.",
      image: Test,
    },
    {
      title: "Adopte un Gueux",
      description:
        "Projet hackathon de 48 heures visant à recréer une version moderne de 'Tinder' adaptée à l'époque médiévale, utilisant React, CSS et HTML. Réalisé en équipe de 5 personnes.",
      image: Test,
    },
    {
      title: "Dino Space Survivor",
      description:
        "Jeu vidéo en ligne développé en 72 heures lors d'un hackathon, conçu avec Phaser pour une expérience de jeu immersive et dynamique.",
      image: Test,
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-6xl font-bold mb-6 text-center">Vigouroux Clément – Développeur Technique & Créatif</h2>
        <p>
          Transformer des idées en solutions : Développeur web créatif et engagé
        </p>
        <p>
          Je conçois et développe des <strong>sites web accessibles</strong> et des <strong>applications web personnalisées</strong>
          pour les <strong>TPE, indépendants et startups</strong>. Mon approche repose sur deux piliers essentiels :
          <strong> l’accessibilité</strong> pour garantir une expérience inclusive et <strong>la personnalisation</strong>
          pour créer des solutions sur mesure, adaptées aux besoins uniques de chaque projet.
        </p>
        <p>
          Chaque interface que je conçois est pensée pour être fluide, intuitive et optimisée, tant sur le plan technique
          que visuel. Mon objectif ? <strong>Donner vie à vos idées en alliant performance et créativité.</strong>
        </p>
      </div>
      <Cards items={projects} />
      <button> More </button>
    </>
  );
}

export default Who;
