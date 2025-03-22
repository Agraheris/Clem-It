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
    <div className="cards-container">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.title} />
          <div className="text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
