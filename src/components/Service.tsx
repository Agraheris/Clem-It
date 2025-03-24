import { useEffect, useState } from "react";
import Papa from "papaparse";
import Cards from "./Cards";

interface ServiceProps {
  onOpenContact: () => void;
}

interface ServiceData {
  title: string;
  description: string;
  image?: string;
  tarif?: number;
}

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiDkiUUxabt7tW-1SDowfQ1jXd96JZibJbQxtpf6RJE9zkApAJtVqn7-GZjBvfopa50RBsXvc0DU_y/pub?output=csv";

function Service({ onOpenContact }: ServiceProps) {
  const [services, setServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    async function fetchAndParseCSV() {
      try {
        const response = await fetch(sheetUrl);
        const csvText = await response.text();

        Papa.parse<ServiceData>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.map((item) => ({
              title: item.title,
              description: item.description,
              image: item.image ? `/assets/${item.image}` : "/assets/nuage.png",
              tarif: item.tarif ? Number(item.tarif) : undefined,
            }));

            setServices(parsedData);
          },
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error);
      }
    }

    fetchAndParseCSV();
  }, []);

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          🚀 Des solutions web adaptées à vos besoins
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-left">
          Vous avez un projet web en tête ? Je conçois des solutions sur mesure...
        </p>
        <p className="text-base md:text-lg text-gray-600 font-semibold max-w-3xl mx-auto text-left">
        Chaque projet est unique, un devis personnalisé est réalisé en fonction de vos besoins spécifiques.
        </p>

      </section>
      <div className="pb-16">
        <Cards items={services} onCardClick={onOpenContact} />
      </div>
    </>
  );
}

export default Service;