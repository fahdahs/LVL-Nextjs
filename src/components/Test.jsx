import { BiCar, BiLike } from "react-icons/bi";
import { GiGps } from "react-icons/gi";

const dataFeatures = [
  {
    icon: <BiCar className="text-[25px]" />,
    title: "Livraison gratuite des voitures",
    textBody:
      "Laayoune Voiture Location la ",
  },
  {
    icon: <BiLike className="text-[25px]" />,
    title: "Un grand choix de véhicules",
    textBody:
      "Nous ",
  },
  {
    icon: <GiGps className="text-[25px]" />,
    title: "GPS Gratuit avec votre location",
    textBody:
      "GPS Gratuit avec",
  },
];

//   ];

export default function PourquoiNousChoisir() {
  return (
    <div className="mt-40">
     
      <div >
        {dataFeatures.map((item) => (
          <>
            <div >
              <div >
                <div>
                  {item.icon}
                </div>
              </div>
              <h3>
                {item.title}
              </h3>
              <p >
                {item.textBody}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
