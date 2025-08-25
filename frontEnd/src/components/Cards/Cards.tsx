import { Link } from "react-router-dom";
import Card from "./Card";
// import ACSyndicate from "../../assets/images/AC Syndicate.avif";
// import arkhamAsylum from "../../assets/images/arkham asylum.jpg";
// import arkhamKnight from "../../assets/images/arkham knight.jpg";
// import CODAW from "../../assets/images/COD AW.jpg";
// import farCryPrimal from "../../assets/images/far cry primal.jpg";
// import godOfWar from "../../assets/images/god of war.avif";
// import GrandTheftAutoV from "../../assets/images/Grand-Theft-Auto-V-.jpg";
// import HogwartsLegacy from "../../assets/images/Hogwarts_Legacy.jpg";
// import horionZeroDawn from "../../assets/images/horion zero dawn.avif";
// import itTakesTwo from "../../assets/images/it takes two.jpg";
// import mortalKombatX from "../../assets/images/mortal kombat x.avif";
// import NFSHeat from "../../assets/images/NFS Heat.avif";
// import overcooked from "../../assets/images/overcooked.avif";
// import returnOfArkham from "../../assets/images/return of Arkham.jpg";
// import shadowOfMordor from "../../assets/images/shadow of mordor.jpg";
// import tekken from "../../assets/images/tekken 7.jpg";
// import unravelTwo from "../../assets/images/unravel two.avif";
// import WDOG from "../../assets/images/WDOG.jpg";
// import WRC5 from "../../assets/images/WRC 5.avif";
// import WRC7 from "../../assets/images/WRC 7.avif";

interface Games {
  games: Array<any>;
}

const Cards = ({ games }: Games) => {
  return (
    <div className="container text-center">
      <div className="row">
        {games.map((game: any) => (
          <div className="col-md-4 mb-4" key={game.id}>
            <Card
              title={game.title}
              imageUrl={game.image_url}
              altText={game.description}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg add-game-button"
          >
            <Link to="/add">Add new Game</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
