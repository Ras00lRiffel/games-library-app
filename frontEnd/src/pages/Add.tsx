const Add = () => {
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
                <input type="text" className="form-control" id="title" />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">
                  Image URL
                </label>
                <input type="text" className="form-control" id="imageUrl" />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={3}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="cover" className="form-label">
                  Game Cover
                </label>
                <input type="file" className="form-control" id="cover" />
              </div>
              <button type="submit" className="btn btn-primary">
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
