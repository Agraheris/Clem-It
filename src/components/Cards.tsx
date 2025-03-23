interface Item {
  title: string;
  description: string;
  image: string;
}

interface CardsProps {
  items: Item[];
}

const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto px-4 py-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/3 h-64 object-cover"
          />

          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
