import { Link } from "react-router-dom";
import PS from "../../assets/images/play logo.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/">
          <img src={PS} alt="Playstation Logo" />
        </Link>
      </div>
      <div className="header-title">
        <h1>Games Library</h1>
      </div>
    </header>
  );
};

export default Header;
