import { useEffect, useState } from "react";
import Papa from "papaparse";
import Cards from "./Cards";
import ModalService from "./ModalService";


interface LiteService {
  title: string;
  description: string;
  image?: string;
  tarif?: number;
}

interface DetailService {
  title: string;
  objectif: string;
  ideal: string;
  features: string;
  delai: string;
}


const liteUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiDkiUUxabt7tW-1SDowfQ1jXd96JZibJbQxtpf6RJE9zkApAJtVqn7-GZjBvfopa50RBsXvc0DU_y/pub?gid=0&single=true&output=csv";
const detailUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiDkiUUxabt7tW-1SDowfQ1jXd96JZibJbQxtpf6RJE9zkApAJtVqn7-GZjBvfopa50RBsXvc0DU_y/pub?gid=1292287016&single=true&output=csv";

function Service() {
  const [servicesLite, setServicesLite] = useState<LiteService[]>([]);
  const [servicesDetail, setServicesDetail] = useState<DetailService[]>([]);
  const [selected, setSelected] = useState<DetailService | null>(null);

  useEffect(() => {
    async function fetchSheets() {
      try {
        const [liteRes, detailRes] = await Promise.all([
          fetch(liteUrl).then((r) => r.text()),
          fetch(detailUrl).then((r) => r.text()),
        ]);


        Papa.parse<LiteService>(liteRes, {
          header: true,
          skipEmptyLines: true,
          complete: (res) => {
            const data = res.data.map((item) => ({
              title: item.title,
              description: item.description || "",
              tarif: item.tarif ? Number(item.tarif) : undefined,
              image: item.image ? `/assets/${item.image}` : "/assets/nuage.png",
            }));
            setServicesLite(data);
          },
        });


        Papa.parse<DetailService>(detailRes, {
          header: true,
          skipEmptyLines: true,
          complete: (res) => {
            setServicesDetail(res.data);
          },
        });
      } catch (err) {
        console.error("Erreur de chargement des services :", err);
      }
    }

    fetchSheets();
  }, []);


  const handleCardClick = (title: string) => {
    const detail = servicesDetail.find((item) => item.title === title);
    if (detail) setSelected(detail);
  };

  return (
    <>
      <section className="text-center max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-6">
          🚀 Des solutions web adaptées à vos besoins
        </h2>
        <p className="text-lg text-gray-600 font-semibold">
          Chaque vision est unique, un devis personnalisé sera réalisé.
        </p>
      </section>

      <div className="pb-16">
        <Cards
          items={servicesLite}
          onCardClick={(item) => handleCardClick(item.title)}
        />
      </div>

      {selected && (
        <ModalService
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          service={selected}
        />
      )}
    </>
  );
}

export default Service;
