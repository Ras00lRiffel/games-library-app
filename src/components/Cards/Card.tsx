interface CardsProps {
  title: string;
  imageUrl: string;
  description: string;
  altText?: string; // Optional alt text for the image
}

const Card = ({ title, imageUrl, description, altText }: CardsProps) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={altText} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
