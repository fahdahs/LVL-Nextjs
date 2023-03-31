import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      NavBar1: "Home",
      NavBar2: "Who we are",
      NavBar3: "Services",
      NavBar4: "Reservation",
      NavBar5: "Rental Conditions",
      NavBar6: "Contacts",
      "header title": "Starting from 195 MAD per day!",
      "header subtitle":
        "The best car rental agency in Laayoune offers you free delivery of cars and 4x4s at Laayoune airport.",
      headermintitle: "Choose your language",
      reserveButton: "Book Now",
      contactButton: "Call Us",
      whoWeAreSmallTitle: "Who we are ?",
      whoWeAreBigTitle:
        "Car rental laayoune the number 1 car rental service in the south.",
      whoWeAreContent:
        "Whatever car you want, Laayoune car rental guarantees you the best online rates for your car rented in Laayoune with a reasonable price from 195.00 MAD, and you have a wide choice of vehicle with a free GPS and a seat. baby at 40.00 MAD per day for the period of your choice, long or short.",
      whoWeAreOfferOne: "Easy booking",
      whoWeAreOfferTwo: "Special prices",
      whoWeAreOfferThree: "Support 24/24",
      whoWeAreOfferFour: "Cash on delivery",
      whyChoosingUsSmallTitle: "Why Choosing Us?",
      whyChoosingUsBigTitle: "Laayoune Car Rental",
      whyChoosingUsContent:
        "If you choose our car rental service, you have opted for a superior quality service. We are committed to providing you with an easy, convenient and hassle-free car rental experience.",
      whyChoosingUsCardOneTitle: "Free Car Delivery",
      whyChoosingUsCardTwoTitle: "A Wide Selection of Vehicles",
      whyChoosingUsCardThreeTitle: "Free GPS with your rental",
      whyChoosingUsCardFourTitle: "Competitive Rates",
      whyChoosingUsCardFiveTitle: "Cancellation - Modification",
      whyChoosingUsCardSixTitle: "24/7 Phone Assistance",
      whyChoosingUsCardOne:
        "Laayoune Car Rental, the best car rental agency in Laayoune, offers free car and 4x4 delivery at Laâyoune Hassan 1er airport (Rent the best cars starting from 195.00 MAD per day)",
      whyChoosingUsCardTwo:
        "We offer a wide selection of recent vehicles, whatever your needs, budget or preferences. For more information, please consult our vehicle guide.",
      whyChoosingUsCardThree:
        "Free GPS with your Jet Sahara car rental, most of our vehicles are equipped with a free GPS. Be sure to select free GPS when booking.",
      whyChoosingUsCardFour:
        "Enjoy our excellent rates, for personal or professional vehicle rental, and unparalleled service quality (Rent the best cars starting from 195.00 MAD per day)",
      whyChoosingUsCardFive:
        "Free cancellation and modification, if you are unsure of your dates, you can choose the Pay Later option, which allows you to modify or cancel your reservation at any time without fees.",
      whyChoosingUsCardSix:
        "We are committed to providing our customers with a high-end service and 24/7 phone assistance. If you need help, do not hesitate to contact us at this number: +212 679-232-802.",
      categoriesSmallTitle: "Categories",
      categoriesBigTitle: "Vehicle Categories",
      categoriesContent:
        "you can be sure that you will receive top quality service and a vehicle in perfect condition for your trip.",
      categoriesCardPrice1: "JUST",
      categoriesCardPrice2: "PER DAY",
      categoriesCardPrice3: "DHS",
      categoriesChoiceOne: "Seats",
      categoriesChoiceTwo: "Bags",
      categoriesChoiceThree: "Doors",
      categoriesReserveBtn: "RESERVE",
      categoriesContactBtn: "CALL US",
      ctaContent:
        "Our vehicle is at your disposal 7 days a week, if you need more information you can contact us. You can visit us at the following address: Boulevard Mekka, 70 000 Laayoune – Morocco",
      ctaTitle: "Laayoune Car Rental",
      ctaLocation: "Laayoune, Morocco",
      conditionsSmallTitle: "Condition",
      conditionsBigTitle: "Laayoune car rental conditions",
      conditionsMediumTitle: "Agency – Laayoune Airport",
      conditionOneTitle: "The driver",
      conditionOneContent:
        "To rent, the driver designated in the contract must be over 21 years old. He must also have held a valid driving license for at least one year. This must be justified by original documents. If a second driver is requested, he/she must be present at the time of departure and present the original of his/her driving license as well as an identity card (for Moroccan residents) or a passport ( for foreigners). Only drivers identified on the rental contract are authorized to drive the rented vehicle.",
      conditionTwoTitle: "Duration",
      conditionTwoContent:
        "The rental is granted for the duration determined in the contract, except for a conventional extension granted by the lessor. Failing return, on the agreed due date, the latter reserves the right to take back the vehicle wherever it is , at the tenant's expense.",
      conditionThreeTitle: "Delivery",
      conditionThreeContent:
        "LAAYOUNE CAR RENTAL lets you choose where you want to pick up or return the vehicle (Hassan 1er Airport in Laayoune, Laayoune Agency: N37 Av Miloud Khaloufi, Laayoune. Morocco) subject to agreement prior.",
      conditionFourTitle: "Fuel",
      conditionFourContent:
        "Fuel is the responsibility of the renter. The car will be delivered with one level of fuel and returned with the same level, fuel left in the tank will not be refunded.",
      conditionFiveTitle: "Payment/Deposit",
      conditionFiveContent:
        "This website is provided as is, with all faults, and Motors makes no representations or warranties of any kind relating to this website or the materials contained on this website. further, nothing contained on this website should be construed as advising you.",
      conditionSixTitle: "Limitation of Liability",
      conditionSixContent:
        "Payment can be made on site in cash (euro or MAD), by credit card (please note that payment by credit card entails an additional commission of 4%), by secure online payment or by bank transfer Swift, Our prices include Unlimited mileage, lubricants and maintenance of the vehicle, delivery / recovery of the vehicle. Our prices are expressed in Euros. The deposit is compulsory by pre-authorization on the credit card (the amount will be fixed according to of the category of the rented or desired car) and will be canceled when the car is returned.",
      conditionSevenTitle: "Insurance",
      conditionSevenContent:
        "Vehicles are insured against all risks (tires are not included). However, for any damage other than theft of the vehicle, fire, glass breakage, civil liability and persons transported (PAI), an excess not Reimbursable capped remains the responsibility of the driver in the event that his or her partial or full liability is engaged.For any accident, damage to the vehicle is only covered on production of an accident report within 24 hours. vehicles on unpaved roads (track) is prohibited except for 4×4. The driver is solely responsible for road traffic offenses and fines. In the event of a mechanical breakdown not caused by the customer, the replacement car is insured by our agency!In the event of a responsible accident, the replacement car will be invoiced to the customer with delivery costs!In the event of a responsible accident, the transport of the damaged car by the tow truck is on the at the customer's expense! It is strictly forbidden to drive our vehicles in the coast, seaside, and rivers, if necessary and in case of breakdown and / or drowning or other damage caused to the vehicle the tenant will be obliged to pay the full amount of repair without any ceiling and the amount could reach the purchase amount of the vehicle, in these cases the deductible will not be applicable.",
      conditionEightTitle: "Jurisdiction Assignment",
      conditionEightContent:
        "By express agreement, the court within the jurisdiction of which the lessor's head office is located shall have sole jurisdiction to hear any dispute relating to this contract. The lessor may, however, waive the benefit of this jurisdiction clause and bear the stalks in all courts of competent jurisdiction.",
      conditionNineTitle: "Refund",
      conditionNineContent:
        "The rental amount is payable in advance for the entire rental period, and will not be refunded in the event of a reduction in the rental period. The deposit, on the other hand, implies a firm commitment by both parties .The customer can cancel his reservation, and the deposit paid will not be refundable, but it will be a credit on your next reservation.",
      conditionTenTitle: "Required Documents",
      conditionTenContent:
        "Driver's license: A driver's license for at least 2 years with no major infractions. Identity document(s): A valid identity document (passport or identity card). 'identity does not include or match your current address, a separate proof of address will also be required.",
      smallTitleForm: "Contact Us",
      bigTitleForm: "Feel free to contact us",
      formContent:
        "You can contact us via Phone, Email or our website. You are welcome",
      locationCityTitle: "Agence Laayoune",
      locationCity: "N37 Av Miloud Khaloufi, Laayoune",
      locationAirportTitle: "Laayoune Airport",
      locationAirport: "Laâyoune Hassan 1er El Aaiún Airport, 70000",
      phoneTitle: "Phone Number",
      phoneNumber: "+212 660-303334",
      inputName: "Full Name",
      inputName1: "Email",
      inputName2: "Phone",
      inputName3: "Message",
      formBtn: "SEND US",
      footer: "© 2023 Web Services sh™.",
      lastfooter: ". All Rights Reserved.",
      pricePerDay: "DH/DAY",
      ChooseCar: "Choose Car",
      start: "Choose the start date",
      end: "Choose the end date",
      startT: "Choose the start time",
      endT: "Choose the end time",
      add1: "Baby Seat",
      priceAdd1: "40.00 Dhs/Day",
      add2: "Free GPS",
      priceAdd2: "0.00 Dhs/Day",
      ReserveBtn: "RESERVE",
      CancelBtn: "CANCEL",
      verification: "Verify your information carefully.",
      Price: "Total Price",
      PriceT: "DHS",
      CheckOne: "Laayoune Agency",
      CheckTwo: "Laayoune Airport",
      Livraison: "Payment On Delivery",
      Livraison1: "Pay cash on delivery.",
      waitingMessage: "Please wait",
      ReserveationCompleted: "Reservation Complete!",
      ReservationNotCompleted: "Error! Reservation not complete.",
    },
  },
  fr: {
    translation: {
      NavBar1: "Accueil",
      NavBar2: "Qui nous sommes",
      NavBar3: "Services",
      NavBar4: "Réservation",
      NavBar5: "Conditions de location",
      NavBar6: "Contacts",
      "header title": "À Partir de 195 Dhs Par jour!",
      "header subtitle":
        "la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune",
      headermintitle: "Choisissez votre langue",
      reserveButton: "Réserver",
      contactButton: "Appellez-nous",
      whoWeAreSmallTitle: "Qui Nous Somme ?",
      whoWeAreBigTitle:
        "Location de voiture laayoune le service numéro 1 au sud de location de voiture.",
      whoWeAreContent:
        "Quelque soit la voiture souhaité, Location de voiture laayoune vous garantit les meilleurs tarifs en ligne pour votre voiture louée à Laayoune avec un prix raisonnable à partir de 195.00 MAD, et vous disposez d'un large choix de véhicule avec un GPS gratuit et un siège bébé à 40.00 MAD par jour pour la période de votre choix quelque soit longue ou courte.",
      whoWeAreOfferOne: "Réservation facile",
      whoWeAreOfferTwo: "Prix ​​spéciaux",
      whoWeAreOfferThree: "supporte 24/24",
      whoWeAreOfferFour: "Paiement à la livraison",
      whyChoosingUsSmallTitle: "Pourquoi nous choisir?",
      whyChoosingUsBigTitle: "Location de Voiture Laayoune",
      whyChoosingUsContent:
        "Si vous choisissez notre service de location de voiture,vous avez opté pour un service de qualité supérieure.ous nous engageons à vous fournir une expérience de location de voiture facile, pratique et sans tracas.",
      whyChoosingUsCardOneTitle: "Livraison gratuite des voitures",
      whyChoosingUsCardTwoTitle: "Un grand choix de véhicules",
      whyChoosingUsCardThreeTitle: "GPS Gratuit avec votre location",
      whyChoosingUsCardFourTitle: "Tarifs Compétitifs",
      whyChoosingUsCardFiveTitle: "Annulation - Modification",
      whyChoosingUsCardSixTitle: "Assistance téléphonique 7/7jours",
      whyChoosingUsCardOne:
        "Laayoune Voiture Location la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune Hassan 1er ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
      whyChoosingUsCardTwo:
        "Nous offrons un grand choix de véhicules récents, quelques soient vos besoins, votre budget ou vos préférences. Pour plus de renseignements, veuillez consulter notreguide de véhicules,",
      whyChoosingUsCardThree:
        "GPS Gratuit avec votre location de voiture jet sahara, La plupart de nos véhicules sont équipées d’un GPS gratuit. Assurez-vous d’avoir sélectionné GPS gratuit lors de la réservation",
      whyChoosingUsCardFour:
        "Profitez de nos excellents tarifs, pour une location de véhicule,personnelle ou professionnelle, et d’une qualité de service hors pair ( Location des meilleurs voitures à partir 195.00 Dhs par jour )",
      whyChoosingUsCardFive:
        "Annulation et modification gratuites, Si vous n’êtes pas sûr de vos dates, vous pouvez choisir l’option Payer plus tard, qui vous permet de modifier ou annuler votre réservation à tout moment sans frais.",
      whyChoosingUsCardSix:
        "Nous nous engageons à fournir à nos clients un service haut de gamme et une assistance téléphonique 7 jour / 7 jour. Si vous avez besoin d’aide n’hésitez pas à nous contacter à ce numéro:+212 679-232-802",
      categoriesSmallTitle: "Catégories",
      categoriesBigTitle: "Catégories des véhicules",
      categoriesContent:
        "vous pouvez être sûr que vous bénéficierez d'un service de qualité supérieure et d'un véhicule en parfait état pour votre voyage.",
      categoriesCardPrice1: "DE",
      categoriesCardPrice2: "PAR JOUR",
      categoriesCardPrice3: "DHS",
      categoriesChoiceOne: "Places",
      categoriesChoiceTwo: "Valises",
      categoriesChoiceThree: "Portes",
      categoriesReserveBtn: "RÉSERVER",
      categoriesContactBtn: "APPELLEZ-NOUS",
      ctaContent:
        "Notre véhicule est à votre disposition 7j/7j, si vous avez besoin de plus d’information vous pouvez nous contacter. Vous pouvez nous visiter sur l’adresse suivante: Boulevard Mekka, 70 000 Laâyoune – Maroc",
      ctaTitle: "Location de Voiture Laâyoune",
      ctaLocalisation: "Laâyoune, Maroc",
      conditionsSmallTitle: "Condition",
      conditionsBigTitle: "Location de voiture laayoune conditions",
      conditionsMediumTitle: "Agence – Aéroport de Laâyoune",
      conditionOneTitle: "Le conducteur",
      conditionOneContent:
        "Pour louer, le conducteur désigné au contrat doit être âgé de plus de 21 ans. Il doit être également titulaire depuis au moins une année, d’un permis de conduire en cours de validité. Cela doit être justifié par des documents originaux. Si un second conducteur est demandé. Celui/celle-ci doit être présente au moment du départ et présenter l’original de son permis de conduire ainsi qu’une carte d’identité (pour les résidents marocains) ou un passeport (pour les étrangers). Seuls les conducteurs identifiés sur le contrat de location sont autorisés à conduire le véhicule loué.",
      conditionTwoTitle: "Durée",
      conditionTwoContent:
        "La location est consentie pour la durée déterminée au contrat sauf prolongation conventionnelle accordée par le loueur. A défaut de restitution, à l’échéance convenue, celui ci se réserve le droit de reprendre le véhicule où qu’il se trouve, aux frais du locataire.",
      conditionThreeTitle: "Livraison",
      conditionThreeContent:
        "LOCATION DE VOITURE LAAYOUNE vous laisse le choix de l’endroit ou vous voulez prendre ou rendre le véhicule (Aéroport Hassan 1er de Laâyoune, Agence de Laâyoune : N37 Av Miloud Khaloufi, Laayoune. Maroc) sous réserve d’accord préalable.",
      conditionFourTitle: "Carburant",
      conditionFourContent:
        "Le carburant est à la charge du locataire. La voiture sera livrée avec un niveau de carburant et rendu avec le même niveau, le carburant laissé au réservoir ne sera pas remboursé.",
      conditionFiveTitle: "Paiement/Caution",
      conditionFiveContent:
        "Ce site Web est fourni tel quel, avec tous les défauts, et Motors n'exprime aucune représentation ou garantie, de quelque nature que ce soit, liée à ce site Web ou aux éléments contenus sur ce site Web. De plus, rien de ce qui est contenu sur ce site Web ne doit être interprété comme vous conseillant.",
      conditionSixTitle: "Limitation de responsabilité",
      conditionSixContent:
        "Le paiement peut se faire sur place en espèce (euro ou MAD), par carte de crédit (veuillez noter que le paiement par carte bancaire entraine une commission supplémentaire de 4%), par payement en ligne sécurisé ou par virement Swift, Nos tarifs comprennent Le kilométrage illimité, les lubrifiants et l’entretient du véhicule, la livraison / récupération du véhicule. Nos tarifs sont exprimés en Euros. La caution est obligatoire par pré autorisation sur la carte bancaire (le montant sera fixé en fonction de la catégorie de la voiture loué ou désiré) et sera annulé à la restitution de la voiture.",
      conditionSevenTitle: "Assurances",
      conditionSevenContent:
        "Les véhicules sont assurés tout risques (les pneus ne sont pas inclus). Toutefois, pour tout dégât autre que le vol du véhicule, incendie, bris de glace, responsabilité civile et personnes transportées (PAI), une franchise non rachetable plafonnée reste à la charge du conducteur dans le cas ou sa responsabilité partielle ou entière serait engagée. Pour tout accident, Les dégâts du véhicule ne sont couverts que sur production d’un constat d’accident dans les 24 heures. L’utilisation des véhicules sur les routes non goudronnées (piste) est interdite sauf pour les 4×4. Le conducteur est seul responsable des délits et contraventions de la circulation routière. En cas de panne mécanique non causé par le client, la voiture de remplacement est assurée par notre agence! En cas d’accident responsable, la voiture de remplacement sera facturé au client avec frais de livraison ! En cas d’accident responsable, le transport de la voiture accidenté par la dépanneuse est sur la charge du client! Il est strictement interdit de conduire nos véhicules dans la côte, bord de mer, et rivières, dans le cas échéant et en cas de panne et/ou de noyade ou autre dégâts causés au véhicule le locataire sera obligé de payer tout le montant de réparation sans aucun plafond et le montant pourrait atteindre le montant d’achat du véhicule, dans ces cas la franchise ne sera pas applicable.",
      conditionEightTitle: "Attribution de juridiction",
      conditionEightContent:
        "De convention expresse le tribunal dans le ressort duquel est situe le siège social du loueur sera seul compétent pour connaître de tout litige relatif au présent contrat. Le loueur pourra toutefois renoncer au bénéfice de la présente clause de juridiction et porter les tiges devant tous les tribunaux compétents.",
      conditionNineTitle: "Remboursement",
      conditionNineContent:
        "Le montant de la location est payable à l’avance pour toute la durée de location, et ne sera pas remboursé en cas de réduction de la durée de location. L’acompte implique en revanche un engagement ferme des deux parties.Le client peut annuler sa réservation, et l’acompte versé ne sera pas remboursable, mais il sera un avoir sur votre prochaine réservation.",
      conditionTenTitle: "Documents obligatoires",
      conditionTenContent:
        "Permis de conduire: Un permis de conduire d’au moins 2 ans sans infractions majeures. Pièce(s) d’identité : Une pièce d’identité valide (passeport ou carte d’identité). Si votre pièce d’identité n’inclut pas ou ne correspond pas à votre adresse actuelle, il faudra également présenter un justificatif d’adresse séparé.",
      smallTitleForm: "Contactez-nous",
      bigTitleForm: "N’hésitez pas à nous contacter",
      formContent:
        "Vous pouvez nos contacter via Télephone, Email ou bien notre site web.Vous êtes les bienvenus",
      locationCityTitle: "Agence Laayoune",
      locationCity: "N37 Av Miloud Khaloufi, Laayoune",
      locationAirportTitle: "Aéroport Laayoune",
      locationAirport: "Aéroport Laâyoune Hassan 1er El Aaiún, 70000",
      phoneTitle: "Numéro de téléphone",
      phoneNumber: "+212 660-303334",
      inputName: "Nom Complet",
      inputName1: "Email",
      inputName2: "Téléphone",
      inputName3: "Message",
      formBtn: "ENVOYEZ-NOUS",
      footer: "© 2023 Web Services sh™",
      lastfooter: ". Tous les droits sont réservés.",
      pricePerDay: "DH/JOUR",
      ChooseCar: "Choisissez la voiture",
      start: "Choisissez la date de début",
      end: "Choisissez la date de fin",
      startT: "Choisissez l'heure de début",
      endT: "Choisissez l'heure de fin",
      add1: "Siége Bébé",
      priceAdd1: "40.00 Dhs/Jour",
      add2: "GPS Gratuit",
      priceAdd2: "0.00 Dhs/Jour",
      ReserveBtn: "RÉSERVER",
      CancelBtn: "ANNULER",
      verification: "Vérifiez bien vos informations.",
      Price: "Prix Total",
      PriceT: "DHS",
      CheckOne: "Agence Laayoune",
      CheckTwo: "Aéroport Laayoune",
      Livraison: "Paiment à La Livraison",
      Livraison1: "Payer en argent comptant à la livraison.",
      waitingMessage: "S'il vous plaît, attendez",
      ReserveationCompleted: "Reservation Compléte!",
      ReserveationNotCompleted: "Error! Reservation non Compléte.",
    },
  },
  ar: {
    translation: {
      NavBar1: "الصفحة الرئيسية",
      NavBar2: "من نحن",
      NavBar3: "الخدمات",
      NavBar4: "حجز",
      NavBar5: "شروط التأجير",
      NavBar6: "جهات الاتصال",
      "header title": "ابتداءً من 195 درهمًا في اليوم",
      "header subtitle":
        "أفضل وكالة لتأجير السيارات في العيون تقدم لك التوصيل المجاني للسيارات و 4 × 4 في مطار العيون",
      headermintitle: "اختر لغتك",
      reserveButton: "احجز الان",
      contactButton: "اتصل بنا",
      whoWeAreSmallTitle: "من نحن؟",
      whoWeAreBigTitle:
        "العيون لتأجير السيارات ، خدمة تأجير السيارات رقم 1 في الجنوب",
      whoWeAreContent:
        "مهما كانت السيارة التي تريدها ، يضمن لك تأجير السيارات بالعيون أفضل الأسعار عبر الإنترنت لسيارتك المستأجرة في العيون بسعر معقول يبدأ من 195.00 درهم إماراتي ، ولديك خيار واسع من السيارات مع GPS مجاني ومقعد للأطفال بسعر 40.00 درهم في اليوم للمدة التي تختارها ، طويلة أو قصيرة",
      whoWeAreOfferOne: "الحجز السهل",
      whoWeAreOfferTwo: "أسعار خاصة",
      whoWeAreOfferThree: "دعم 24/24",
      whoWeAreOfferFour: "الدفع عند الاستلام",
      whyChoosingUsSmallTitle: "لماذا تختارنا؟",
      whyChoosingUsBigTitle: "تأجير سيارات العيون",
      whyChoosingUsContent:
        "إذا اخترت خدمة تأجير السيارات الخاصة بنا ، فقد اخترت خدمة ممتازة. نحن ملتزمون بتزويدك بتجربة تأجير سيارات سهلة ومريحة وخالية من المتاعب",
      whyChoosingUsCardOneTitle: "توصيل مجاني للسيارة",
      whyChoosingUsCardTwoTitle: "خيار كبير من المركبات",
      whyChoosingUsCardThreeTitle: "GPS مجاني مع تأجيرك",
      whyChoosingUsCardFourTitle: "أسعار تنافسية",
      whyChoosingUsCardFiveTitle: "إلغاء - تعديل",
      whyChoosingUsCardSixTitle:
        "دعم عبر الهاتف على مدار الساعة طوال أيام الأسبوع",
      whyChoosingUsCardOne:
        "Laayoune Car Rental أفضل وكالة تأجير سيارات في العيون تقدم توصيل مجاني للسيارات و 4 × 4 في مطار العيون الحسن الأول (استئجار أفضل السيارات ابتداءً من 195.00 درهم في اليوم)",
      whyChoosingUsCardTwo:
        "نحن نقدم مجموعة كبيرة من السيارات الحديثة ، مهما كانت احتياجاتك ، أو ميزانيتك أو تفضيلاتك. لمزيد من المعلومات ، يرجى الرجوع إلى دليل المركبات لدينا",
      whyChoosingUsCardThree:
        "GPS مجاني مع تأجير سيارة jet sahara الخاصة بك ، معظم سياراتنا مجهزة بنظام GPS مجاني. تأكد من تحديد GPS المجاني عند الحجز",
      whyChoosingUsCardFour:
        "استفد من أسعارنا الممتازة لتأجير السيارات ، الشخصية أو المهنية ، وجودة خدمة لا مثيل لها (استئجار أفضل السيارات ابتداءً من 195.00 درهمًا في اليوم)",
      whyChoosingUsCardFive:
        "إلغاء مجاني وتغيير ، إذا لم تكن متأكدًا من التواريخ ، يمكنك اختيار خيار الدفع لاحقًا ، والذي يسمح لك بتغيير أو إلغاء حجزك في أي وقت مجانًا",
      whyChoosingUsCardSix:
        "نحن ملتزمون بتزويد عملائنا بخدمة من الدرجة الأولى ودعم هاتفي على مدار 7 أيام في الأسبوع. إذا كنت بحاجة إلى أي مساعدة ، فلا تتردد في الاتصال بنا على هذا الرقم: + 212 679-232-802",
      categoriesSmallTitle: "الفئات",
      categoriesBigTitle: "فئات المركبات",
      categoriesContent:
        "يمكنك التأكد من أنك ستتلقى خدمة عالية الجودة وسيارة في حالة ممتازة لرحلتك",
      categoriesCardTitle: "رينو كليو 5",
      categoriesCardPrice1: "فقط",
      categoriesCardPrice2: "لليوم",
      categoriesCardPrice3: "درهم",
      categoriesChoiceOne: "5 مقاعد",
      categoriesChoiceTwo: "6 حقائب",
      categoriesChoiceThree: "5 أبواب",
      categoriesReserveBtn: "حجز",
      categoriesContactBtn: "اتصل بنا",
      ctaContent:
        "سيارتنا تحت تصرفك 7 أيام في الأسبوع ، إذا كنت بحاجة إلى مزيد من المعلومات يمكنك الاتصال بنا. يمكنك زيارتنا على العنوان التالي: شارع مكة ، 70000 العيون - المغرب",
      ctaTitle: "العيون لتأجير السيارات",
      ctaLocation: "العيون ، المغرب",
      conditionsSmallTitle: "الحالة",
      conditionsBigTitle: "شروط تأجير السيارات في العيون",
      conditionsMediumTitle: "الوكالة - مطار العيون",
      conditionOneTitle: "السائق",
      conditionOneContent:
        "للتأجير ، يجب أن يكون عمر السائق المحدد في العقد أكثر من 21 عامًا. كما يجب أن يكون لديه رخصة قيادة سارية لمدة عام على الأقل. يجب أن يكون هذا مبررًا بالوثائق الأصلية. إذا طُلب سائق آخر ، يجب أن يكون حاضرًا وقت المغادرة وأن يقدم أصل رخصة قيادته بالإضافة إلى بطاقة الهوية (للمقيمين المغاربة) أو جواز السفر (للأجانب). يُسمح فقط للسائقين المحددين في عقد الإيجار لقيادة السيارة المستأجرة",
      conditionTwoTitle: "المدة",
      conditionTwoContent:
        "يُمنح الإيجار للمدة المحددة في العقد ، باستثناء التمديد التقليدي الممنوح من قبل المؤجر. وفي حالة عدم العودة ، في تاريخ الاستحقاق المتفق عليه ، يحتفظ الأخير بالحق في استعادة السيارة أينما كانت ، على نفقة المستأجر",
      conditionThreeTitle: "التسليم",
      conditionThreeContent:
        "تتيح لك شركة LAAYOUNE CAR RENTAL اختيار المكان الذي تريد استلام السيارة أو إعادتها (مطار الحسن الأول في العيون ، وكالة العيون: N37 Av Miloud Khaloufi ، العيون. المغرب) رهناً بالاتفاق المسبق",
      conditionFourTitle: "الوقود",
      conditionFourContent:
        "الوقود هو مسؤولية المستأجر. سيتم تسليم السيارة بمستوى واحد من الوقود وإعادتها بنفس المستوى ، ولن يتم استرداد الوقود المتبقي في الخزان",
      conditionFiveTitle: "الدفع / الإيداع",
      conditionFiveContent:
        "يتم توفير هذا الموقع كما هو ، مع جميع الأخطاء ، ولا تقدم شركة Motors أي تعهدات أو ضمانات من أي نوع فيما يتعلق بهذا الموقع أو المواد الواردة في هذا الموقع. علاوة على ذلك ، لا يجب تفسير أي شيء في هذا الموقع على أنه نصيحة أنت",
      conditionSixTitle: "تحديد المسؤولية",
      conditionSixContent:
        "يمكن السداد في الموقع نقدًا (يورو أو درهم مغربي) ، عن طريق بطاقة الائتمان (يرجى ملاحظة أن الدفع عن طريق بطاقة الائتمان يستلزم عمولة إضافية بنسبة 4٪) ، عن طريق الدفع الآمن عبر الإنترنت أو عن طريق التحويل المصرفي Swift ، لدينا تشمل الأسعار عدد غير محدود من الأميال ، ومواد التشحيم وصيانة السيارة ، وتسليم / استرداد السيارة. يتم التعبير عن أسعارنا باليورو. الإيداع إلزامي عن طريق التفويض المسبق على بطاقة الائتمان (سيتم تحديد المبلغ وفقًا لفئة السيارة المستأجرة أو المرغوبة) وسيتم إلغاؤها عند إرجاع السيارة",
      conditionSevenTitle: "التأمين",
      conditionSevenContent:
        "المركبات مؤمنة ضد جميع المخاطر (الإطارات غير مشمولة). ومع ذلك ، بالنسبة لأي ضرر بخلاف سرقة السيارة ، والحريق ، وكسر الزجاج ، والمسؤولية المدنية والأشخاص المنقولين (PAI) ، يبقى الفائض غير القابل للسداد مسؤولية السائق في حالة تحمل مسؤوليته الجزئية أو الكاملة. بالنسبة لأي حادث ، يتم تغطية الضرر الذي يلحق بالمركبة فقط عند تقديم تقرير الحادث في غضون 24 ساعة.المركبات على الطرق غير المعبدة (المسار) محظورة باستثناء مقابل 4 × 4. السائق هو المسؤول الوحيد عن المخالفات والغرامات المرورية على الطرق. في حالة حدوث عطل ميكانيكي غير ناتج عن العميل ، يتم تأمين السيارة البديلة من قبل وكالتنا! في حالة وقوع حادث مسؤول ، السيارة البديلة سيتم إصدار فاتورة للعميل مع تكاليف التسليم! في حالة وقوع حادث مسؤول ، يتم نقل السيارة التالفة بواسطة شاحنة السحب على على حساب العميل! يُمنع منعًا باتًا قيادة مركباتنا في الساحل وشاطئ البحر والأنهار ، إذا لزم الأمر وفي حالة تعطل السيارة و / أو الغرق أو أي ضرر آخر قد يلحق بالمركبة ، سيُلزم المستأجر بدفع المبلغ الكامل للإصلاح دون أي سقف. وقد يصل المبلغ إلى مبلغ شراء السيارة ، وفي هذه الحالات لن يكون الخصم قابلاً للتطبيق",
      conditionEightTitle: "التنازل عن الاختصاص",
      conditionEightContent:
        "بموجب اتفاق صريح ، يكون للمحكمة الواقعة ضمن نطاق اختصاصها الذي يقع فيه المكتب الرئيسي للمؤجر الاختصاص الوحيد للنظر في أي نزاع يتعلق بهذا العقد. ومع ذلك ، يجوز للمؤجر التنازل عن الاستفادة من بند الاختصاص القضائي هذا ويتحمل السيقان في جميع المحاكم ذات الاختصاص القضائي",
      conditionNineTitle: "رد الأموال",
      conditionNineContent:
        "يُدفع مبلغ الإيجار مقدمًا طوال فترة الإيجار بالكامل ، ولن يتم رده في حالة تخفيض فترة الإيجار. ومن ناحية أخرى ، فإن الإيداع يعني التزامًا ثابتًا من كلا الطرفين. يمكن للعميل إلغاء حجزه ، ولن يكون الوديعة المدفوعة قابلة للاسترداد ، ولكنها ستُضاف إلى حجزك التالي ",
      conditionTenTitle: "المستندات المطلوبة",
      conditionTenContent:
        "رخصة القيادة: رخصة قيادة لمدة عامين على الأقل بدون مخالفات كبيرة. مستند (مستندات) الهوية: مستند هوية صالح (جواز سفر أو بطاقة هوية). الهوية لا تتضمن عنوانك الحالي أو تطابقه ، سيُطلب أيضًا إثبات منفصل للعنوان",
      smallTitleForm: "اتصل بنا",
      formContent:
        "يمكنك الاتصال بنا عبر الهاتف أو البريد الإلكتروني أو موقعنا الإلكتروني. مرحبًا بك",
      bigTitleForm: "لا تتردد في الاتصال بنا",
      locationCityTitle: "وكالة العيون",
      locationCity: "N37 Av Miloud Khaloufi، Laayoune",
      locationAirportTitle: "مطار العيون",
      locationAirport: "Aéroport Laâyoune Hassan 1er El Aaiún, 70000",
      phoneTitle: "رقم الهاتف",
      phoneNumber: "+212 660-303334",
      inputName: "الاسم الكامل",
      inputName1: "البريد",
      inputName2: "الهاتف",
      inputName3: "الرسالة",
      formBtn: "إرسال",
      footer: "© 2023 Web Services sh ™. جميع الحقوق محفوظة",
      pricePerDay: "DH / DAY",
      ChooseCar: "اختر سيارة",
      start: "اختر تاريخ البدء",
      end: "اختر تاريخ الانتهاء",
      startT: "اختر وقت البدء",
      endT: "اختر وقت الانتهاء",
      add1: "مقعد الاطفال",
      priceAdd1: "40.00 درهم / يوم",
      add2: "GPS مجاني",
      priceAdd2: "",
      ReserveBtn: "حجز",
      CancelBtn: "الرجوع",
      verification: "تحقق من معلوماتك بعناية",
      Price: "السعر الإجمالي",
      Price1: "درهم",
      CheckOne: "وكالة العيون ",
      CheckTwo: "مطار العيون",
      livraison: "الدفع عند التسليم",
      livraison1: "الدفع نقدًا عند الاستلام",
      waitingMessage: "من فضلك انتظر",
      ReserveationCompleted: "اكتمل الحجز",
      ReservationNotCompleted: " خطأ! لم يكتمل الحجز.",
    },
  },
  es: {
    translation: {
      NavBar1: "Inicio",
      NavBar2: "Quienes somos",
      NavBar3: "Servicios",
      NavBar4: "Reserva",
      NavBar5: "Condiciones de Alquiler",
      NavBar6: "Contactos",
      "header title": "¡A partir de 195 MAD al día!",
      "header subtitle":
        "La mejor agencia de alquiler de coches en Laayoune le ofrece la entrega gratuita de coches y 4x4 en el aeropuerto de Laayoune.",
      headermintitle: "Elige tu idioma",
      reserveButton: "Reservar ahora",
      contactButton: "Llámanos",
      whoWeAreSmallTitle: "¿Quiénes somos?",
      whoWeAreBigTitle:
        "Alquiler de coches Laayoune, el servicio de alquiler de coches número 1 en el sur.",
      whoWeAreContent:
        "Sea cual sea el coche que desee, el alquiler de coches Laayoune le garantiza las mejores tarifas en línea para su coche alquilado en Laayoune a un precio razonable a partir de 195.00 MAD, y tiene una amplia elección de vehículos con un GPS gratuito y un asiento para bebés a 40.00 MAD por día durante el período que elija, largo o corto.",
      whoWeAreOfferOne: "Reserva fácil",
      whoWeAreOfferTwo: "Precios especiales",
      whoWeAreOfferThree: "Soporte 24/24",
      whoWeAreOfferFour: "Pago contra entrega",
      whyChoosingUsSmallTitle: "¿Por qué elegirnos?",
      whyChoosingUsBigTitle: "Alquiler de coches Laayoune",
      whyChoosingUsContent:
        "Si elige nuestro servicio de alquiler de coches, ha optado por un servicio de calidad superior. Nos comprometemos a proporcionarle una experiencia de alquiler de coches fácil, conveniente y sin problemas.",
      whyChoosingUsCardOneTitle: "Entrega gratuita de coches",
      whyChoosingUsCardTwoTitle: "Una amplia selección de vehículos",
      whyChoosingUsCardThreeTitle: "GPS gratuito con su alquiler",
      whyChoosingUsCardFourTitle: "Tarifas competitivas",
      whyChoosingUsCardFiveTitle: "Cancelación - Modificación",
      whyChoosingUsCardSixTitle: "Asistencia telefónica 24/7",
      whyChoosingUsCardOne:
        "Alquiler de coches Laayoune, la mejor agencia de alquiler de coches en Laayoune, ofrece la entrega gratuita de coches y 4x4 en el aeropuerto Laâyoune Hassan 1er (alquile los mejores coches a partir de 195.00 MAD al día)",
      whyChoosingUsCardTwo:
        "Ofrecemos una amplia selección de vehículos recientes, sea cual sea sus necesidades, presupuesto o preferencias. Para obtener más información, consulte nuestra guía de vehículos.",
      whyChoosingUsCardThree:
        "GPS gratuito con su alquiler de Jet Sahara, la mayoría de nuestros vehículos están equipados con un GPS gratuito. Asegúrese de seleccionar GPS gratuito al reservar.",
      whyChoosingUsCardFour:
        "Disfrute de nuestras excelentes tarifas, para el alquiler de vehículos personales o profesionales, y una calidad de servicio sin igual (alquile los mejores coches a partir de 195.00 MAD al día)",
      whyChoosingUsCardFive:
        "Cancelación y modificación gratuitas. Si no estás seguro de tus fechas, puedes elegir la opción Pagar después, que te permite modificar o cancelar tu reserva en cualquier momento sin cargos.",
      whyChoosingUsCardSix:
        "Estamos comprometidos en proporcionar a nuestros clientes un servicio de alta gama y asistencia telefónica 24/7. Si necesitas ayuda, no dudes en contactarnos en el siguiente número: +212 679-232-802.",
      categoriesSmallTitle: "Categorías",
      categoriesBigTitle: "Categorías de vehículos",
      categoriesContent:
        "Puedes estar seguro de que recibirás un servicio de alta calidad y un vehículo en perfecto estado para tu viaje.",
      categoriesCardPrice1: "SOLO",
      categoriesCardPrice2: "POR DÍA",
      categoriesCardPrice2: "DH",
      categoriesChoiceOne: "Asientos",
      categoriesChoiceTwo: "Bolsas",
      categoriesChoiceThree: "Puertas",
      categoriesReserveBtn: "RESERVAR",
      categoriesContactBtn: "LLÁMANOS",
      ctaContent:
        "Nuestro vehículo está a tu disposición los 7 días de la semana, si necesitas más información, no dudes en contactarnos. Puedes visitarnos en la siguiente dirección: Boulevard Mekka, 70 000 Laayoune – Marruecos",
      ctaTitle: "Alquiler de coches en Laayoune",
      ctaLocation: "Laayoune, Marruecos",
      conditionsSmallTitle: "Condiciones",
      conditionsBigTitle: "Condiciones de alquiler de coches en Laayoune",
      conditionsMediumTitle: "Agencia – Aeropuerto de Laayoune",
      conditionOneTitle: "El conductor",
      conditionOneContent:
        "Para alquilar, el conductor designado en el contrato debe tener más de 21 años. También debe haber tenido una licencia de conducir válida durante al menos un año. Esto debe ser justificado por documentos originales. Si se solicita un segundo conductor, este debe estar presente en el momento de la salida y presentar el original de su licencia de conducir, así como una identificación (para residentes marroquíes) o un pasaporte (para extranjeros). Solo los conductores identificados en el contrato de alquiler están autorizados para conducir el vehículo alquilado.",
      conditionTwoTitle: "Duración",
      conditionTwoContent:
        "El alquiler se concede por la duración determinada en el contrato, excepto por una prórroga convencional concedida por el arrendador. En caso de no devolución en la fecha acordada, este se reserva el derecho de recuperar el vehículo donde quiera que esté, a cargo del inquilino.",
      conditionThreeTitle: "Entrega",
      conditionThreeContent:
        "LAAYOUNE CAR RENTAL te permite elegir dónde quieres recoger o devolver el vehículo (Aeropuerto Hassan 1er en Laayoune, Agencia de Laayoune: N37 Av Miloud Khaloufi, Laayoune. Marruecos) sujeto a acuerdo previo.",
      conditionFourTitle: "Combustible",
      conditionFourContent:
        "El combustible es responsabilidad del arrendatario. El coche se entregará con un nivel de combustible y se devolverá con el mismo nivel, el combustible que quede en el tanque no será reembolsado.",
      conditionFiveTitle: "Pago/Depósito",
      conditionFiveContent:
        "Este sitio web se proporciona tal cual, con todos sus defectos, y Motors no ofrece ninguna representación o garantía de ningún tipo relacionada con este sitio web o los materiales contenidos en este sitio web. Además, nada de lo contenido en este sitio web debe interpretarse como un asesoramiento para usted.",
      conditionSixTitle: "Limitación de responsabilidad",
      conditionSixContent:
        "El pago se puede realizar en el sitio en efectivo (euros o MAD), con tarjeta de crédito (tenga en cuenta que el pago con tarjeta de crédito conlleva una comisión adicional del 4%), mediante pago seguro en línea o mediante transferencia bancaria Swift. Nuestros precios incluyen kilometraje ilimitado, lubricantes y mantenimiento del vehículo, entrega/recogida del vehículo. Nuestros precios se expresan en euros. El depósito es obligatorio mediante preautorización en la tarjeta de crédito (el monto se fijará según la categoría del coche alquilado o deseado) y se cancelará cuando se devuelva el coche.",
      conditionSevenTitle: "Seguro",
      conditionSevenContent:
        "Los vehículos están asegurados contra todos los riesgos (los neumáticos no están incluidos). Sin embargo, para cualquier daño que no sea el robo del vehículo, el incendio, la rotura de cristales, la responsabilidad civil y las personas transportadas (PAI), queda a cargo del conductor un excedente no reembolsable si se compromete su responsabilidad parcial o total. En caso de cualquier accidente, el daño al vehículo solo está cubierto mediante la presentación de un informe de accidente dentro de las 24 horas. Está prohibido circular por caminos sin pavimentar (pista) excepto para los 4x4. El conductor es el único responsable de las infracciones de tráfico y multas. En caso de una avería mecánica no causada por el cliente, ¡el coche de reemplazo está asegurado por nuestra agencia! En caso de un accidente responsable, el coche de reemplazo se facturará al cliente con los costos de entrega. En caso de un accidente responsable, el transporte del coche dañado por la grúa corre a cargo del cliente. Está estrictamente prohibido conducir nuestros vehículos en la costa, en el mar y en los ríos. En caso de necesidad y en caso de avería y/o ahogamiento u otro daño causado al vehículo, el inquilino estará obligado a pagar el importe completo de la reparación sin ningún límite y el importe podría alcanzar el precio de compra del vehículo. En estos casos, no se aplicará el deducible.",
      conditionEightTitle: "Asignación de jurisdicción",
      conditionNineContent:
        "El importe del alquiler se paga por adelantado para todo el período de alquiler, y no se reembolsará en caso de reducción del período de alquiler. El depósito, por otro lado, implica un compromiso firme por ambas partes. El cliente puede cancelar su reserva, y el depósito pagado no será reembolsable, pero será un crédito en su próxima reserva.",
      conditionTenTitle: "Documentos requeridos",
      conditionTenContent:
        "Licencia de conducir: una licencia de conducir durante al menos 2 años sin infracciones graves. Documento(s) de identidad: un documento de identidad válido (pasaporte o tarjeta de identidad). Si la identidad no incluye o coincide con su dirección actual, también se requerirá una prueba de domicilio por separado.",
      smallTitleForm: "Contáctanos",
      bigTitleForm: "No dudes en contactarnos",
      formContent:
        "Puede contactarnos por teléfono, correo electrónico o en nuestro sitio web. ¡Eres bienvenido!",
      locationCityTitle: "Agencia Laayoune",
      locationCity: "N37 Av Miloud Khaloufi, Laayoune",
      locationAirportTitle: "Aeropuerto de Laayoune",
      locationAirport: "Aeropuerto Laâyoune Hassan 1er El Aaiún, 70000",
      phoneTitle: "Número de teléfono",
      phoneNumber: "+212 660-303334",
      inputName: "Nombre completo",
      inputName1: "Correo electrónico",
      inputName2: "Teléfono",
      inputName3: "Mensaje",
      formBtn: "ENVÍANOS",
      inputEmail: "Correo electrónico",
      inputPhone: "Teléfono",
      inputMessage: "Mensaje",
      formBtn: "ENVIARNOS",
      footer: "© 2023 Servicios Web sh™.",
      lastfooter: ". Todos los derechos reservados.",
      pricePerDay: "DH/DÍA",
      ChooseCar: "Elegir coche",
      start: "Elegir la fecha de inicio",
      end: "Elegir la fecha de fin",
      startT: "Elegir la hora de inicio",
      endT: "Elegir la hora de fin",
      add1: "Asiento de bebé",
      priceAdd1: "40.00 Dhs/Día",
      add2: "GPS gratis",
      priceAdd2: "0.00 Dhs/Día",
      ReserveBtn: "RESERVAR",
      CancelBtn: "CANCELAR",
      verification: "Verifique su información cuidadosamente.",
      Price: "Precio total",
      PriceT: "DHS",
      CheckOne: "Agencia de Laayoune",
      CheckTwo: "Aeropuerto de Laayoune",
      livraison: "Pago a la entrega",
      livraison1: "Pague en efectivo a la entrega.",
      waitingMessage: "Por favor, espere",
      ReserveationCompleted: "¡Reserva completada!",
      ReservaNotCompleted: "¡Error! Reserva no completa.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
