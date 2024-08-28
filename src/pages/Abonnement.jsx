import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import ImageSkeleton from "../components/common/image/Image";
import MarqueeDemo from "../components/ui/magicui/Reviews";
import PricingComponent from "../components/pricing/Pricing";



const Abonnement = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";



  let Gridlayout = [
    {
      Header: "Produits BIO de Qualité",
      paragraph: "Des fruits et légumes fraîchement récoltés, sans pesticides.",
      Image: "./assets/img/sections/p1/s2-icon1.svg",
    },
    {
      Header: "Livraison à Domicile",
      paragraph:
        "Recevez votre panier directement chez vous, à votre convenance.",
      Image: "./assets/img/sections/p1/s2-icon2.svg",
    },
    {
      Header: "Personnalisation",
      paragraph: "Un abonnement qui s'adapte a vos besoins et préferences",
      Image: "./assets/img/sections/p1/s2-icon3.svg",
    },
    {
      Header: "Suport Local",
      paragraph:
        "Encouragez les agriculteurs locaux et soutenez l'agriculture durable",
      Image: "./assets/img/sections/p1/s2-icon4.svg",
    },
  ];

  return (
    <div>
      {/* section banner */}
      <section className="yellowbg px-10 lg:px-[100px] h-[100vh] flex items-center ">
        <div className="max-sm:text-center text-left h-fit md:w-[45%] flex flex-col gap-4 justify-start p-8 bg-slate-100  ">
          <h1 className="text-[2rem] md:text-6xl font-bold mx-[auto]">
            recevez votre premier panier directement chez vous !
          </h1>
          <p className="lg:w-3/4 md:text-xl lg:text-2xl font-light">
            Sélectionnez le type d'abonnement qui vous convient Mixte ou Saison.
          </p>
        </div>
      </section>

      {/* section:Nos Abonnement */}
      <section className="px-4 lg:h-[90vh] py-[100px] flex justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10 ">
          <div className="col-span-1  max-sm:gap-4 h-full flex flex-col justify-between ">
            <div className="lg:w-3/4 gap-4 flex flex-col mb-8">
              <h1 className="text-[1.7rem] lg:text-4xl font-extrabold leading-[2.8rem] ">
                Trouvez l'Abonnement Parfait pour Vous
              </h1>
              <p className="text-lg max-sm:text-justify">
                Chez Yupi, nous offrons une gamme de plans d'abonnement conçus
                pour s'adapter à vos préférences et à votre emploi du temps. Que
                vous soyez un amateur de fruits, un passionné de légumes, ou les
                deux, nous avons le panier qu'il vous faut 100% Bio.
              </p>
            </div>
            <div className="col-span-1 flex gap-4">
              <ImageSkeleton
                src={"./assets/img/sections/p1/IMG_0631.jpg"}
                alt={"farmer"}
                styleClass={"object-cover h-[22vh] w-fit max-sm:hidden "}
              />
              <ImageSkeleton
                src={"./assets/img/sections/p1/farming.jpg"}
                alt={"farmer"}
                styleClass={"object-cover h-[22vh] w-fit max-sm:hidden "}
              />
              <ImageSkeleton
                src={"./assets/img/sections/p1/fruit.jpg"}
                alt={"farmer"}
                styleClass={"object-cover h-[22vh] w-fit max-sm:hidden "}
              />
            </div>
          </div>

          <div className="col-span-1">
            <ImageSkeleton
              src={"./assets/img/sections/p1/IMG_0630.jpg"}
              alt={"farmer"}
              styleClass={
                "lg:object-cover lg:h-[60vh] lg:w-[60vw] h-auto w-full object-cover "
              }
            />
          </div>
        </div>
      </section>

      {/* section:Details sur les Abonnement */}
      <section className="px-4  py-[100px] flex flex-col justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-[#669c8a]">
        <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10  ">
          <div className="col-span-1  max-sm:gap-4 h-full flex flex-col justify-center ">
            <div className=" gap-4 flex flex-col mb-8 bg-green-100 p-10">
              <h1 className="text-[1.7rem] lg:text-4xl font-extrabold leading-[2.8rem] ">
                Prêt à commencer ?
              </h1>

              <p className="text-lg max-sm:text-justify">
                Choisissez un abonnement Mixte ou saison comme type
                d’abonnement, Mixte avec des producteurs sélectionnés au plus
                près de vous, saison provenant de Belgique uniquement. informez
                nous de vos intolérances ou allergies et entrez dans le
                mouvement
              </p>
              <p className="text-lg max-sm:text-justify">
                Yupi vous livre tout les Dimanches vos besoin en fruits et
                légumes BIO et de grade 1 pour chaque jours de la semaine
                (quantité préconisée par l’ONSS)
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <ImageSkeleton
              src={"./assets/img/sections/p1/basket.png"}
              alt={"Delivery"}
              styleClass={
                "lg:object-cover lg:h-[60vh] lg:w-[60vw] h-auto w-full object-cover "
              }
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10  ">
          <div className="col-span-1 bg-green-100 p-10 ">
            <div className="gap-4 flex flex-col mb-8">
              <h1 className="text-[1.7rem] w-fit lg:text-4xl font-extrabold p-8 bg-white ">
                1
              </h1>
              <h1 className="text-[1.7rem] lg:w-3/4  lg:text-4xl font-extrabold leading-[2.8rem] ">
                Abonnement Mixte
              </h1>

              <p className="text-lg text-justify">
                Profitez d'une sélection diversifiée de fruits et légumes
                provenant de producteurs locaux, proches de chez vous. Cet
                abonnement vous permet de bénéficier de la fraîcheur des
                produits régionaux tout en découvrant de nouvelles saveurs au
                fil des saisons. Les producteurs sont choisis pour leur
                engagement envers la qualité et la durabilité.
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-green-100 p-10">
            <div className=" gap-4 flex flex-col mb-8">
              <h1 className="text-[1.7rem] w-fit lg:text-4xl font-extrabold p-8 bg-white ">
                2
              </h1>
              <h1 className="text-[1.7rem] lg:w-3/4  lg:text-4xl font-extrabold leading-[2.8rem] ">
                Abonnement Saison
              </h1>

              <p className="text-lg text-justify">
                Avec l'abonnement Saison, vous recevrez uniquement des produits
                cultivés en Belgique. Suivez le rythme des saisons et savourez
                des fruits et légumes récoltés à maturité. Cet abonnement est
                idéal pour ceux qui souhaitent soutenir l'agriculture locale
                tout en profitant de produits authentiques.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* section:grid de prix */}
      <section className="px-4 py-[100px] flex flex-col justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] ">
      <PricingComponent/>
      </section>



      {/* section choisir yupi */}

      <section className="px-2 py-[100px] lg:px-[5%] lg:py-[10%]  2xl:px-[15%]">
        <div className="h-auto md:w-full lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Pourquoi Choisir Yupi
          </h2>
          <p className="text-xl text-center">Commencez une Vie saine</p>
        </div>

        {/* Grid layout section */}
        <div className="lg:grid  md:flex md:justify-center md:flex-wrap lg:grid-cols-4 px-4 gap-10 mb-8">
          {Gridlayout.map((card, index) => (
            <div
              key={index}
              className="mb-8 lg:mb-0 md:w-[35%] lg:w-full bg-slate-50 shadow-sm px-2 p-8 rounded-xl"
            >
              <div className="">
                <div className="mb-4 justify-center flex items-center">
                  <img
                    className="w-[13vw] md:w-[4vw] h-full object-cover"
                    src={card.Image}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="px-8 py-2 text-center">
                  <h1 className="text-lg mb-2 font-bold">{card.Header}</h1>
                  <p className=" text-[#828282] text-lg"> {card.paragraph} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section testimonial */}
      <section className=" bg-slate-100 py-[100px]">
        <div className="h-auto lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-xl text-center w-1/2 mx-[auto] ">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>
        <MarqueeDemo />
      </section>

      {/* section:FAQ */}
      <section className='px-4 py-[100px] flex flex-col justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%]'>
      <div className="h-auto lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Questions Fréquentes (FAQ)
          </h2>
          <p className="text-xl text-center">Trouvez des réponses à vos 
          questions</p>
        </div>
        <div className='lg:w-[80%] bg-slate-50 rounded-3xl px-10 lg:px-[50px]'>
      <Accordion>
      <AccordionItem className='py-6 text-lg font-bold' key="1" aria-label="Accordion 1" title="Comment puis-je changer mon abonnement ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className='py-6' key="2" aria-label="Accordion 2" title="Quels sont les horaires de livraison ?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className='py-6' key="3" aria-label="Accordion 3" title="Puis-je annuler mon abonnement ?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
      </section>
    </div>
  );
};

export default Abonnement;
