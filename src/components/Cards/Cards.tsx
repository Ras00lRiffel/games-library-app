import Card from "./Card";

const Cards = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Card
            title="Game Title 1"
            imageUrl="https://via.placeholder.com/150"
            description="This is a description of Game Title 1."
            altText="Game Title 1 Image"
          />
        </div>
        <div className="col">
          <Card
            title="Game Title 2"
            imageUrl="https://via.placeholder.com/150"
            description="This is a description of Game Title 2."
          />
        </div>
        <div className="col">
          <Card
            title="Game Title 3"
            imageUrl="https://via.placeholder.com/150"
            description="This is a description of Game Title 3."
            altText="Game Title 3 Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
