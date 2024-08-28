import React, { useState } from 'react';
import axios from 'axios';
import "../styles/App.css";
import Btn from "../components/common/button/Button";
import ImageSkeleton from "../components/common/image/Image";
import { MailRounded, Phone } from '@mui/icons-material';
import {Accordion, AccordionItem} from "@nextui-org/react";



// import TextRevealDemo from "../components/ui/magicui/TextReveal";

const Apropos = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";




  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données du formulaire à Formspree
      await axios.post('https://formspree.io/f/xrbzeovk', formData);

      // Afficher le message de remerciement
      setShowThankYou(true);

      // Log success or redirect the user
      console.log('Formulaire soumis avec succès!');
      // Vous pouvez rediriger l'utilisateur ou afficher un message de succès comme nécessaire

    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      // Gérer l'erreur, afficher un message d'erreur ou rediriger l'utilisateur
    }

    // Réinitialiser le formulaire après la soumission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

    // Masquer le message de remerciement après quelques secondes
    setTimeout(() => setShowThankYou(false), 5000);
  };



  return (
    <div>
      {/* section banner */}
      <section className="greenbg px-[100px] h-[100vh] flex items-center">
        <div className=" md:w-[50%] lg:w-[45%] h-fit flex flex-col gap-4 p-8 bg-slate-100 max-sm:justify-center ">
          <h1 className="text-[2.2rem] md:text-6xl font-bold">
           Bienvenu <br /> chez Yupi
          </h1>
          <p className="lg:w-3/4 md:text-xl lg:text-2xl font-light ">
          nous croyons en une alimentation saine, responsable et respectueuse de l'environnement
          </p>
        </div>
      </section>

      {/* section recevez directement chez vous*/}
      <section className="px-4 lg:h-[90vh] py-[100px] flex justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10 ">
          <div className="col-span-1  max-sm:gap-4 ">
            <div className="lg:w-3/4 h-full max-sm:gap-8 flex flex-col justify-between">
              <h1 className="text-[1.7rem] lg:text-4xl font-extrabold lg:leading-[2.8rem] ">
              une nouvelle manière de consommer des produits frais
              </h1>
              <p className="text-lg max-sm:text-justify ">
                Découvrez une nouvelle manière de consommer des produits frais,
                locaux et de saison.
              </p>
              <p className="text-lg max-sm:text-justify">
                Chez Yupi, nous croyons en une alimentation saine, responsable
                et respectueuse de l'environnement. Grâce à nos abonnements,
                vous recevez chaque semaine un panier de fruits et légumes
                soigneusement sélectionnés, directement chez vous.
              </p>
              <Btn
                label={"Nos Offres d'Abonnement"}
                customStyle={"bg-orange-400 text-white font-medium"}
                customLink={"/Abonnement"}
              />
            </div>
          </div>

          <div className="col-span-1 max-sm:mt-8">
            <ImageSkeleton
              src={"./assets/img/sections/p1/family.jpg"}
              alt={"farmer"}
              styleClass={"h-fit w-full object-cover "}
            />
          </div>
        </div>
      </section>

      {/* section histoire yupi*/}
      <section className="h-auto bg-slate-100 px-4 py-[100px] flex justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%]">
        <div className="">
          <div className="lg:p-10  max-sm:mb-8">
            <h1 className="text-[1.7rem] lg:text-4xl font-extrabold lg:leading-[2.8rem]">
              L’histoire de Yupi commence par celle de trois amis Bruxellois,
              amoureux de la nature et determines par I’ambition d’abattre la
              complexite d’avoir une vie saine non hors de prix.
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10 ">
            <div className="col-span-1 ">
              <div className="lg:w-3/4 h-full flex flex-col  max-sm:gap-8 justify-between">
                <p className="text-lg max-sm:text-justify">
                  En etant le seul intermediaire entre vous et nos partenaires
                  producteurs et grossistes nous evitons done nombres de contre
                  temps logistique couteux et polluant, assez pour vous proposer
                  un tarif avantageux pour tout le monde en plus d’un service
                  encourageant. Mais parce que nous avons tous qu’abandonner une
                  habitude n’est pas une mince a faire, e’est une famille que
                  nous vous proposons de rejoindre, composee de chefs
                  cuisiniers, d’amoureux de la cuisine et d’employes a votre
                  ecoute
                </p>
                <p className="text-lg max-sm:text-justify">
                  Il est temps de passer à une alimentation plus saine, plus
                  locale et plus respectueuse de la planète. Inscrivez-vous dès
                  aujourd'hui à l'un de nos abonnements et recevez votre premier
                  panier de fruits et légumes frais chez vous !
                </p>
              </div>
            </div>

            <div className="col-span-1 max-sm:mt-8">
              <ImageSkeleton
                src={"./assets/img/sections/p1/quote.png"}
                alt={"farmer"}
                styleClass={"lg:object-cover lg:h-[60vh] lg:w-[60vw] h-fit w-full object-cover "}
              />
            </div>
          </div>
        </div>
      </section>

      {/* section:D’ou viennent nos produits */}
      <section className="px-4 lg:h-[90vh] py-[100px] flex justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:p-10 gap-10 ">
          <div className="col-span-1  max-sm:gap-4 h-full flex flex-col justify-between ">
            <div className="lg:w-3/4 gap-4 flex flex-col mb-8">
              <h1 className="text-[1.7rem] lg:text-4xl font-extrabold leading-[2.8rem] ">
              D’ou viennent nos produits?
              </h1>
              <p className="text-lg max-sm:text-justify">
              Les produits Bio que nous vous livrons chez Yupi proviennent de
differentes fermes engages de Belgiques et du site des mines de
Rungis, a Paris ou notre grossiste partenaire OXA Bio market nous
proposes les meilleurs produits des producteurs mondial aux meme
convictions.
              </p>
            </div>
            <div className="col-span-1">
            <ImageSkeleton
              src={"./assets/img/sections/p1/Bio.png"}
              alt={"farmer"}
              styleClass={"object-cover h-[18vh] w-fit max-sm:hidden "}
            />
          </div>
          </div>

          <div className="col-span-1">
            <ImageSkeleton
              src={"./assets/img/sections/p1/produits.jpeg"}
              alt={"farmer"}
              styleClass={"lg:object-cover lg:h-[60vh] lg:w-[60vw] h-fit w-full object-cover "}
            />
          </div>
        </div>
      </section>


      {/* section:formulaire de contact */}
      <section className="px-4 lg:h-[90vh] py-[100px] flex justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%] bg-slate-100">
      <div className='md:grid grid-cols-2 md:space-x-3 '>
        <div className="col-span-1 flex flex-col justify-between max-sm:mb-8">
          <div className='max-sm:mb-4'>
            <h1 className="lg:text-4xl text-[1.8rem] font-bold mb-4 text-center md:text-left">Comment nous contacter ?</h1>
         
            <p className="text-lg md:text-justify text-center lg:w-3/4">
            Nous vous repondrons au plus vite via notre mail, ou par telephone 7/7 jrs de 9h a
            18h
            </p>
          </div>

          <div className='flex flex-col'>
          <div className='flex flex-row max-sm:justify-center items-center'>
            <div className='text-lg justify-center text-black items-center p-4 bg-white rounded-full'>

            <Phone  />
            </div>
            <p className='text-lg flex lg:text-xl font-medium justify-center items-center px-8 py-4 bg-white rounded-full'>
            +33 048 568 456
            </p>
          </div>
          <div className='flex flex-row max-sm:justify-center items-center'>
            <div className='text-lg justify-center text-black items-center p-4 bg-white rounded-full'>

            <MailRounded  />
            </div>
            <p className='text-lg flex lg:text-xl font-medium justify-center items-center px-8 py-4 bg-white rounded-full'>
            yupimouvement@gmail.com
            </p>
          </div>
          </div>
        </div>

        <div className="col-span-1">
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className='w-full'>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  placeholder='Noms'
                  onChange={handleChange}
                  required
                  className="p-8 border w-full "
                />
              </div>

              <div className='w-full'>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder='Prenoms'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="p-8 border w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
                className="p-8 border w-full "
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder='Envoyez-nous votre question ou votre message'
                cols="50"
                rows="3"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-8 border w-full"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-400 w-full text-white font-bold py-5 px-20 rounded-full hover:bg-gray-500"
            >
              Envoyer
            </button>
          </form>
        </div>

        {showThankYou && (
          <div className="fixed p-4 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img className='w-[3vw] mb-2' src="./assets/anim5.png" alt="logo"/>
              <h2 className="text-2xl font-bold mb-4">Merci de nous avoir contactés !</h2>
              <p>Nous vous répondrons dès que possible.</p>
              <button
                className="mt-4 bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => setShowThankYou(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
      </section>

      {/* section:FAQ */}
      <section className='px-4 py-[100px] flex flex-col justify-center items-center lg:px-[5%] lg:py-[10%]  2xl:px-[15%]'>
      <div className="h-auto lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Comment ça Marche ?
          </h2>
          <p className="text-xl text-center">Simple comme bonjour !</p>
        </div>
        <div className='w-[80%] bg-slate-50 rounded-3xl px-[50px]'>
      <Accordion>
      <AccordionItem className='py-6' key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className='py-6' key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className='py-6' key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
      </section>
    </div>
  );
};

export default Apropos;
