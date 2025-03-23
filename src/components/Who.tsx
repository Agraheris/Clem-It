import React, { useState } from "react";
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

  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  const hasMore = visibleProjects < projects.length;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Vigouroux Clément – Développeur Technique & Créatif
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Transformer des idées en solutions : Développeur web créatif et engagé
        </p>
        <div className="space-y-4 text-base md:text-lg text-gray-600 text-left max-w-3xl mx-auto">
          <p>
            Je conçois et développe des <strong className="font-semibold text-gray-800">sites web accessibles</strong> et des{" "}
            <strong className="font-semibold text-gray-800">applications web personnalisées</strong> pour les{" "}
            <strong className="font-semibold text-gray-800">TPE, indépendants et startups</strong>.
          </p>
          <p>
            Mon approche repose sur deux piliers essentiels :{" "}
            <strong className="font-semibold text-gray-800">l’accessibilité</strong> pour garantir une expérience inclusive et{" "}
            <strong className="font-semibold text-gray-800">la personnalisation</strong> pour créer des solutions sur mesure,
            adaptées aux besoins uniques de chaque projet.
          </p>
          <p>
            Chaque interface que je conçois est pensée pour être fluide, intuitive et optimisée, tant sur le plan technique
            que visuel. Mon objectif ?{" "}
            <strong className="font-semibold text-gray-800">
              Donner vie à vos idées en alliant performance et créativité.
            </strong>
          </p>
        </div>
      </div>

      <div className="px-4">
        <Cards items={projects.slice(0, visibleProjects)} />
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
          >
            En voir plus
          </button>
        </div>
      )}
    </>
  );
};

export default Who;
