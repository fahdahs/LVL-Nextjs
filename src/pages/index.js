import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

import Categories from "@/components/Categories";
import Card from "@/shared/Card";
import Cta from "@/components/Cta";
import { Typography } from "@/client/material-tailwind";

import { groq } from "next-sanity";
import { client } from "@/utils/sanity-client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Modal from "@/shared/components/Modal";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";

// DATA
const conditionData = [
  {
    title: "Le conducteur",
    text: "Pour louer, le conducteur désigné au contrat doit être âgé de plus de 21 ans. Il doit être également titulaire depuis au moins une année, d’un permis de conduire en cours de validité. Cela doit être justifié par des documents originaux. Si un second conducteur est demandé. Celui/celle-ci doit être présente au moment du départ et présenter l’original de son permis de conduire ainsi qu’une carte d’identité (pour les résidents marocains) ou un passeport (pour les étrangers). Seuls les conducteurs identifiés sur le contrat de location sont autorisés à conduire le véhicule loué.",
  },
  {
    title: "Durée",
    text: "La location est consentie pour la durée déterminée au contrat sauf prolongation conventionnelle accordée par le loueur. A défaut de restitution, à l’échéance convenue, celui ci se réserve le droit de reprendre le véhicule où qu’il se trouve, aux frais du locataire.",
  },
  {
    title: "Livraison",
    text: "LOCATION DE VOITURE LAAYOUNE vous laisse le choix de l’endroit ou vous voulez prendre ou rendre le véhicule (Aéroport Hassan 1er de Laâyoune, Agence de Laâyoune : N37 Av Miloud Khaloufi, Laayoune. Maroc) sous réserve d’accord préalable.",
  },
  {
    title: "Carburant",
    text: "Le carburant est à la charge du locataire. La voiture sera livrée avec un niveau de carburant et rendu avec le même niveau, le carburant laissé au réservoir ne sera pas remboursé.",
  },
  {
    title: "Paiement/Caution",
    text: "This Website is provided “as is,” with all faults, and Motors express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.",
  },
  {
    title: "Limitation of liability",
    text: "Le paiement peut se faire sur place en espèce (euro ou MAD), par carte de crédit (veuillez noter que le paiement par carte bancaire entraine une commission supplémentaire de 4%), par payement en ligne sécurisé ou par virement Swift, Nos tarifs comprennent Le kilométrage illimité, les lubrifiants et l’entretient du véhicule, la livraison / récupération du véhicule. Nos tarifs sont exprimés en Euros. La caution est obligatoire par pré autorisation sur la carte bancaire (le montant sera fixé en fonction de la catégorie de la voiture loué ou désiré) et sera annulé à la restitution de la voiture.",
  },
  {
    title: "Assurances",
    text: "Les véhicules sont assurés tout risques (les pneus ne sont pas inclus). Toutefois, pour tout dégât autre que le vol du véhicule, incendie, bris de glace, responsabilité civile et personnes transportées (PAI), une franchise non rachetable plafonnée reste à la charge du conducteur dans le cas ou sa responsabilité partielle ou entière serait engagée. Pour tout accident, Les dégâts du véhicule ne sont couverts que sur production d’un constat d’accident dans les 24 heures. L’utilisation des véhicules sur les routes non goudronnées (piste) est interdite sauf pour les 4×4. Le conducteur est seul responsable des délits et contraventions de la circulation routière. En cas de panne mécanique non causé par le client, la voiture de remplacement est assurée par notre agence! En cas d’accident responsable, la voiture de remplacement sera facturé au client avec frais de livraison ! En cas d’accident responsable, le transport de la voiture accidenté par la dépanneuse est sur la charge du client! Il est strictement interdit de conduire nos véhicules dans la côte, bord de mer, et rivières, dans le cas échéant et en cas de panne et/ou de noyade ou autre dégâts causés au véhicule le locataire sera obligé de payer tout le montant de réparation sans aucun plafond et le montant pourrait atteindre le montant d’achat du véhicule, dans ces cas la franchise ne sera pas applicable.",
  },
  {
    title: "Attribution de juridiction",
    text: "De convention expresse le tribunal dans le ressort duquel est situe le siège social du loueur sera seul compétent pour connaître de tout litige relatif au présent contrat. Le loueur pourra toutefois renoncer au bénéfice de la présente clause de juridiction et porter les tiges devant tous les tribunaux compétents.",
  },
  {
    title: "Remboursement",
    text: "Le montant de la location est payable à l’avance pour toute la durée de location, et ne sera pas remboursé en cas de réduction de la durée de location. L’acompte implique en revanche un engagement ferme des deux parties.Le client peut annuler sa réservation, et   l’acompte versé ne sera pas remboursable, mais il sera un avoir sur votre prochaine réservation.",
  },
  {
    title: "Documents obligatoires",
    text: "Permis de conduire: Un permis de conduire d’au moins 2 ans sans infractions majeures. \n Pièce(s) d’identité : Une pièce d’identité valide (passeport ou carte d’identité). Si votre pièce d’identité n’inclut pas ou ne correspond pas à votre adresse actuelle, il faudra également présenter un justificatif d’adresse séparé.",
  },
];

//QUERY
const query = groq`*[_type == "cars"]{
  id,
  "slug": slug.current ,
  title,
  seats,
  doors,
  bags,
  price,
  "image": image.asset->url
}`;

export async function getStaticProps() {
  const cars_data = await client.fetch(query);
  return { props: { cars_data, conditionData } };
}

export default function Home({ cars_data, conditionData }) {
  const [show, setShow] = useState(false);

  const transitionNavbar = () =>
    window.scrollY > 200 ? setShow(true) : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <>
      <Head>
        <title>
          Location de voiture à Laayoune | LOCATION DE VOITURE A LAAYOUNE
        </title>
        <meta
          name="description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune,Location Voiture a Laayoune, locationdevoiturealaayoune, Location Voiture Aeroport Laayoune, vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta
          name="keywords"
          content="location, voiture, Laayoune, entreprise, agence, jetSahara, jet Sahara, Location voiture laayoune, locationdevoiturealaayoune, location de voiture a laayoune"
        />
        <link
          rel="canonical"
          href="https://locationdevoiturealaayoune.com/#conditions_de_location"
        />
        <meta
          property="og:title"
          content="Location de voiture à Laayoune | LOCATION DE VOITURE LAAYOUNE"
        />
        <meta
          property="og:description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://locationdevoiturealaayoune.com"
        />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/lvl.png"
        />
        <meta
          property="og:image:alt"
          content="Location de Voitures à Laayoune"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Location de voiture à Laayoune | LOCATION DE VOITURE LAAYOUNE"
        />
        <meta
          name="twitter:description"
          content="Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte."
        />
        <meta
          name="twitter:image"
          content="https://www.linkpicture.com/q/lvl.png"
        />
        <meta
          name="twitter:image:alt"
          content="location de Voitures à Laayoune"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="FAHD AHSYNI - SH WEB SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-[#0a0c0f] relative overflow-x-hidden">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/212660303334"
          className={`fixed z-[99] flex items-center justify-center bottom-6 right-6 h-[50px] w-[50px] rounded-full p-2 shadow-lg bg-[#25D366] ${
            show ? "block" : "hidden"
          }`}
        >
          <AiOutlineWhatsApp className="w-6 h-6 text-white" />
        </motion.a>
        <Modal />
        <Navbar />
        <Header />
        <Categories>
          <>
            {cars_data.map((car) => (
              <Card key={car.id} {...car} />
            ))}
            <Modal />
          </>
        </Categories>
        <Cta />
        <section
          id="conditions_de_location"
          className="w-full pt-24 relative md:pb-52 pb-8"
        >
          <div className="space-y-4 max-w-5xl mx-auto dark:bg-[#0a0c0f] mb-24 md:text-center text-start px-4">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                className="text-blue-600 dark:text-blue-500 mb-2.5 dark:text-500"
              >
                Condition
              </Typography>
              <Typography
                variant="h2"
                className="capitalize md:text-5xl text-3xl text-gray-900 dark:text-gray-100 mb-4 font-bold"
              >
                Location de voiture laayoune conditions
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mt-5 pb-12 max-w-prose text-gray-500 dark:text-gray-300"
              >
                Agence – Aéroport de Laâyoune
              </Typography>
            </motion.div>
            {conditionData.map((condition, key) => (
              <details
                key={key}
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-100 dark:bg-primary-dark-light">
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    {condition.title}
                  </h2>
                  <svg
                    className="ml-1.5 text-gray-900 dark:text-gray-100 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-4 mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                  {condition.text}
                </p>
              </details>
            ))}
            <svg
              id="contacts"
              className="absolute w-screen -bottom-3 left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                className="fill-gray-100 dark:fill-primary-dark"
                fillOpacity="1"
                d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
