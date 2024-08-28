import React from "react";
import "../styles/App.css";
import Btn from "../components/common/button/Button";
import ImageSkeleton from "../components/common/image/Image";
import MarqueeDemo from "../components/ui/magicui/Reviews";



const Accueil = () => {
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

  let Guide = [
    {
      Header: "Produits BIO de Qualité",
      paragraph: "Des fruits et légumes fraîchement récoltés, sans pesticides.",
      Image: "./assets/img/sections/p1/s3-icon1.svg",
    },
    {
      Header: "Livraison à Domicile",
      paragraph:
        "Recevez votre panier directement chez vous, à votre convenance.",
      Image: "./assets/img/sections/p1/s3-icon2.svg",
    },
    {
      Header: "Personnalisation",
      paragraph: "Un abonnement qui s'adapte a vos besoins et préferences",
      Image: "./assets/img/sections/p1/s3-icon1.svg",
    },
    {
      Header: "Suport Local",
      paragraph:
        "Encouragez les agriculteurs locaux et soutenez l'agriculture durable",
      Image: "./assets/img/sections/p1/s3-icon1.svg",
    },
  ];

  return (
    <div>
      {/* section banner */}
      <section className="banner px-10 md:px-[100px] h-[100vh] flex items-center">
        <div className=" md:w-[50%] max-sm:text-center max-sm:rounded-xl lg:w-[45%] h-fit flex flex-col gap-4 p-8 bg-slate-100 max-sm:justify-center ">
          <h1 className="text-[2.2rem]  md:text-4xl lg:text-6xl leading-[2.8rem] font-bold mx-[auto]">
            Mangez Sainement, Vivez Mieux avec{" "}
            <span className="text-orange-500 text-[2.2rem] md:text-4xl lg:text-6xl font-bold">
              Yupi
            </span>
          </h1>
          <p className="lg:w-3/4 md:text-xl lg:text-2xl font-light ">
            L'intermediaire entre vos 5 fruits et légumes BIO par jours et un
            monde meilleur
          </p>
          <Btn
            label={"Découvrez Nos Abonnements"}
            customStyle={"bg-yellow-400 max-sm:mx-auto text-green-800 font-medium "}
            customLink={"/Abonnement"}
          />
        </div>
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
        <div className="lg:grid md:grid-cols-2  md:flex md:justify-center md:flex-wrap lg:grid-cols-4 px-4 gap-10 mb-8">
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

      {/* section comment ca marche*/}
      <section className="px-2 py-[100px] lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-slate-100">
        <div className="h-auto lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Comment ça Marche ?
          </h2>
          <p className="text-xl text-center">Simple comme bonjour !</p>
        </div>
        <div className="lg:grid lg:grid-cols-2 px-4 gap-10">
          <div className="col-span-1">
            {/* Grid layout section */}
            <div className="lg:grid lg:grid-cols-1 lg:grid-rows-4 gap-4 mb-6">
              {Guide.map((card, index) => (
                <div
                  key={index}
                  className=" bg-white py-6 px-8 mb-4 md:mb-0 rounded-xl"
                >
                  <div className="flex justify-between">
                    <div className="text-left md:w-2/3">
                      <h1 className="text-lg mb-2 font-bold">{card.Header}</h1>
                      <p className=" text-[#828282] text-lg">
                        {" "}
                        {card.paragraph}{" "}
                      </p>
                    </div>
                    <div className="ml-4 justify-center flex items-center">
                      <img
                        className="w-[13vw] md:w-[3vw] h-fit object-cover"
                        src={card.Image}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <ImageSkeleton
              src={"./assets/img/sections/p1/farmer.jpg"}
              alt={"farmer"}
              styleClass={"h-fit w-full object-cover"}
            />
          </div>
        </div>
      </section>

      {/* section yupi market*/}
      <section className="px-2 py-[100px] lg:px-[5%] lg:py-[10%]  2xl:px-[15%]">
        <div className=" lg:grid grid-cols-1 grid-rows-2 gap-4">
          <div className="row-span-1 bg-[#5c6868] h-fit lg:h-[50vh] rounded-3xl p-10 max-sm:mb-2 overflow-hidden flex-wrap-reverse flex md:flex-nowrap gap-10 w-full justify-between">
          <div className="flex flex-col lg:w-1/3 justify-between max-sm:gap-4 ">
            <h1 className="text-5xl font-extrabold text-yellow-300">A venir, Yupi market !</h1>
            <p className="text-white text-lg">
              Bientôt, ajouter notre sélection de produits a la pièce a votre
              prochaine livraison. fruits, légumes, produits d’épicerie Bio
              jusqu’a -50% pour aller toujours plus loin dans la lutte contre
              l’inflation !
            </p>
            <Btn
            label={"Inscris toi a notre Newsletter"}
            customStyle={"bg-orange-400 text-white font-medium"}
            customLink={"/"}
          />
          </div>

          
            <ImageSkeleton
              src={"./assets/img/sections/p1/market.png"}
              alt={"farmer"}
              styleClass={"h-fit lg:w-[50vw] object-cover"}
            />
    
          
          </div>
          <div className="row-span-1 gap-2 md:gap-4 flex-wrap flex md:flex-nowrap ">
          <div className="row-span-1 bg-slate-100 h-fit lg:h-[50vh] rounded-3xl p-10 max-sm:mb-2 overflow-hidden items-center flex-wrap-reverse flex md:flex-nowrap gap-10 w-full justify-between">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-extrabold ">livraison locale</h1>
            <p className=" text-lg">
            L’abonnement de saison ne 
            vous livrera que des produits (BIO) venue de Belgique
            </p>
            <Btn
            label={"En savoir plus"}
            customStyle={"bg-yellow-400 font-medium"}
            customLink={"/Abonnement"}
          />
          </div>

          
            <ImageSkeleton
              src={"./assets/img/sections/p1/belgium.png"}
              alt={"farmer"}
              styleClass={"h-fit w-[10vw] lg:w-[50vw] object-cover"}
            />
    
          
          </div>
          <div className="row-span-1 bg-slate-100 h-fit lg:h-[50vh] rounded-3xl p-10 max-sm:mb-2 overflow-hidden flex-wrap-reverse flex md:flex-nowrap gap-10 w-full items-center justify-between">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-3xl font-extrabold">livraison varié</h1>
            <p className=" text-lg">
            L’abonnement Varié vous livrera des produits BIO des
pays les plus proches
            </p>
            <Btn
            label={"En savoir plus"}
            customStyle={"bg-yellow-400 font-medium"}
            customLink={"/Abonnement"}
          />
          </div>

          
            <ImageSkeleton
              src={"./assets/img/sections/p1/eu.png"}
              alt={"farmer"}
              styleClass={"h-fit w-[10vw] lg:w-[60vw] object-cover"}
            />
          
          </div>
          </div>
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
          La satisfaction de nos clients est
          notre priorité
          </p>
        </div>
<MarqueeDemo/>
</section>

{/* section Newsletter*/}
<section className="lg:h-svh py-[50px] flex justify-center items-center">
<div className="container bg-blue-100 w-[90%] lg:w-[80%] m-[auto] p-10 lg:py-[100px] rounded-3xl flex flex-col gap-8 justify-center items-center">
<div className="flex flex-col justify-center">
          <h2 className="text-[1.7rem] font-extrabold text-center ">
            {" "}
            Ne Manquez Rien !
          </h2>
          <p className="text-xl text-center lg:w-2/3 mx-auto ">Recevez les dernières nouvelles et
          offres spéciales de Yupi</p>
        </div>

        <div className="lg:w-1/2 flex flex-wrap max-sm:gap-2 lg:flex-nowrap">
          <input className="px-10 w-full rounded-lg py-4" type="email" name="email" placeholder="ex:johndoe@gmail.com" id="" />
          <Btn
            label={"Souscris"}
            customStyle={"bg-green-400 text-lg mx-auto max-sm:w-full lg:rounded-md font-extrabold"}
            customLink={"/Abonnement"}
          />
        </div>
</div>
</section>
    </div>
  );
};

export default Accueil;
