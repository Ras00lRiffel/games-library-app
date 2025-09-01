import axios from "axios";
import { useState } from "react";

const Add = () => {
  const [game, setGame] = useState({
    title: "",
    imageUrl: "",
    description: "",
    cover: null,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setGame((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/games", game);
      alert("Game has been added!! :).");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(game);
  return (
    <div className="text-center add-page">
      <h1>Add a new game</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Game Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={3}
                  name="description"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="cover" className="form-label">
                  Game Cover
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="cover"
                  name="cover"
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
