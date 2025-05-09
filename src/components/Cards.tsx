interface Item {
  title: string;
  description: string;
  image?: string;
  tarif?: number;
}

interface CardsProps {
  items: Item[];
  onCardClick?: (item: Item) => void;
}

const Cards: React.FC<CardsProps> = ({ items, onCardClick }) => {
  return (
    <div className="grid gap-6 px-4 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onCardClick?.(item)}
          role="button"
          aria-label={`Ouvrir les détails pour ${item.title}`}
          className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col md:flex-row items-center gap-6"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-48 h-48 object-contain rounded-md ml-10"
            />
          )}

          <div className="w-full md:flex-1 md:pr-4 text-center md:text-left md:pl-20">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-gray-600 mb-2">{item.description}</p>
            )}

            {item.tarif !== undefined && (
              <p className="text-indigo-600 font-medium">
                À partir de {item.tarif} €
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
