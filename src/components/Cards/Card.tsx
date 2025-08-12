interface CardsProps {
  title: string;
  imageUrl: string;
  description?: string;
  altText?: string; // Optional alt text for the image
}

const Card = ({
  title,
  imageUrl,
  description,
  altText = "Image Title",
}: CardsProps) => {
  return (
    <div className="card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageUrl} className="card-img-top" alt={altText} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="flip-card-back">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
