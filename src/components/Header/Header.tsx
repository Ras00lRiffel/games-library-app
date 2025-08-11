import PS from "../../assets/images/ps logo.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <img src={PS} alt="Playstation Logo" />
    </header>
  );
}

export default Header;
