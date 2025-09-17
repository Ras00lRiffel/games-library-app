import axios from "axios";
import { Link } from "react-router-dom";

interface CardsProps {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  altText?: string; // Optional alt text for the image
}

const Card = ({
  id,
  title,
  imageUrl,
  //description = "No description available",
  altText = "Image Title",
}: CardsProps) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/games/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div className="card flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={"http://localhost:8800" + imageUrl}
            className="card-img-top"
            alt={altText}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="btns-container">
              <button className="btn btn-secondary">
                <Link to={`/update/${id}`}>Update</Link>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flip-card-back">
          <p className="card-text">{description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
