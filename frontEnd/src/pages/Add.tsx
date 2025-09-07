import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [file, setFile] = useState<File | null>(null);
  const [game, setGame] = useState({
    title: "",
    image_url: "",
    description: "",
    hours: null,
  });

  const navigate = useNavigate();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    // debugger;
    if (name === "image_url" && files && files[0]) {
      // Use the file directly, not from state
      const selectedFile = files[0];
      setFile(selectedFile);

      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const res = await fetch("http://localhost:8800/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log("File uploaded:", data.url);

        // Update game with the uploaded file URL
        setGame((prev) => ({ ...prev, image_url: data.url }));
      } catch (error) {
        console.error("File upload failed", error);
      }
    } else {
      // For text inputs (title, description, hours)
      setGame((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(game);
    try {
      await axios.post("http://localhost:8800/add", game);
      navigate("/");
    } catch (error) {
      //console.log(error);
    }
  };

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
                <label htmlFor="image_url" className="form-label">
                  Image URL
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image_url"
                  name="image_url"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  className="form-control"
                  id="description"
                  //rows={3}
                  name="description"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="hours" className="form-label">
                  Game hours
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="hours"
                  name="hours"
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
