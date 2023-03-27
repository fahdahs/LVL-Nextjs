import React from 'react'

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

export default function Test() {
  return (
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
  )
}
