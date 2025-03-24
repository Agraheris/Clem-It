interface Item {
  title: string;
  description: string;
  image: string;
  tarif?: number;
}

interface CardsProps {
  items: Item[];
  onCardClick?: (title: string) => void;
}

const Cards: React.FC<CardsProps> = ({ items, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onCardClick?.(item.title)}
          className={`cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
          {item.tarif !== undefined ? <p>A partir de {item.tarif} €</p> : null}
        </div>
      ))}
    </div>
  );
};

export default Cards;
