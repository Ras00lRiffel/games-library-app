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

        {/* <div className="col-md-4 mb-4">
          <Card
            title="Assassin's Creed Syndicate"
            imageUrl={ACSyndicate}
            altText="Game Title 1 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="Batman: Arkham Asylum" imageUrl={arkhamAsylum} />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Batman: Arkham Knight"
            imageUrl={arkhamKnight}
            altText="Game Title 3 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Call of Duty: Advanced Warfare"
            imageUrl={CODAW}
            altText="Game Title 4 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="Far Cry Primal" imageUrl={farCryPrimal} />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="God of War"
            imageUrl={godOfWar}
            altText="Game Title 6 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Grand Theft Auto V"
            imageUrl={GrandTheftAutoV}
            altText="Game Title 7 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Hogwarts Legacy"
            imageUrl={HogwartsLegacy}
            description="Hours: 41h"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Horizon Zero Dawn"
            imageUrl={horionZeroDawn}
            altText="Game Title 9 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="It Takes Two"
            imageUrl={itTakesTwo}
            altText="Game Title 10 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="Mortal Kombat X" imageUrl={mortalKombatX} />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Need for Speed Heat"
            imageUrl={NFSHeat}
            altText="Game Title 12 Image"
            description="Hours: 39h"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Overcooked"
            imageUrl={overcooked}
            altText="Game Title 13 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Return of Arkham"
            imageUrl={returnOfArkham}
            altText="Game Title 14 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Shadow of Mordor"
            imageUrl={shadowOfMordor}
            altText="Game Title 15 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Tekken 7"
            imageUrl={tekken}
            altText="Game Title 16 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Unravel Two"
            imageUrl={unravelTwo}
            altText="Game Title 17 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="Watch Dogs"
            imageUrl={WDOG}
            altText="Game Title 18 Image"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="WRC 5" imageUrl={WRC5} altText="Game Title 19 Image" />
        </div>
        <div className="col-md-4 mb-4">
          <Card
            title="WRC 7"
            imageUrl={WRC7}
            altText="Game Title 20 Image"
            description="Hello World"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
