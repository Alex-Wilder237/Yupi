import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { loadStripe } from '@stripe/stripe-js';

const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState('mixte');
  // const stripePromise = loadStripe('your-publishable-key-here');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // const handleSubscription = async (priceId) => {
  //   const stripe = await stripePromise;
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: 'subscription',
  //     lineItems: [{ price: priceId, quantity: 1 }],
  //     successUrl: window.location.origin + '/success',
  //     cancelUrl: window.location.origin + '/cancel',
  //   });

  //   if (error) {
  //     console.error("Stripe Checkout error:", error);
  //   }
  // };

  const plans = {
    mixte: [
      {
        title: 'Simple',
        price: '100€',
        priceSuffix: '/1month',
        features: [
          'Panier de fruits et legumes Bio pour une semaine',
          'livraison uniquement le dimanche',
          'horraire de livraison entre 8h et 18h',
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/5kA2a686Tavl5sQ3cc',
        bgColor: 'bg-pink-300',
      },
      {
        title: 'Double',
        price: '190€',
        priceSuffix: '/2month',
        features: [
          'Panier de fruits et legumes Bio pour une semaine',
          'livraison uniquement le dimanche',
          'Vous pouvez proposer une plage horraire de 2h entre 8h et 18h',
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/fZeaGC72P7j9dZmbIM',
        bgColor: 'bg-lime-300',
      },
      {
        title: 'Tripple',
        price: '270€',
        priceSuffix: '/3month',
        features: [
          'Panier de fruits et legumes Bio pour une semaine',
          'livraison uniquement le dimanche',
          "Vous pouvez proposer une l'horraire de votre choix entre 8h et 18h",
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/3cs7uq3QD7j9g7ucMT',
        bgColor: 'bg-orange-300',
      }],



    saison: [
      {
        title: 'Simple',
        price: '100€',
        priceSuffix: '/1month',
        features: [
          'Panier de fruits et legume local Bio pour une semaine',
          'livraison uniquement le dimanche',
          'horraire de livraison entre 8h et 18h',
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/8wM8yudrdbzp5sQ5kl',
        bgColor: 'bg-lime-300',
      },
      {
        title: 'Double',
        price: '190€',
        priceSuffix: '/2month',
        features: [
          'Panier de fruits et legumes local Bio pour une semaine',
          'livraison uniquement le dimanche',
          'Vous pouvez proposer une plage horraire de 2h entre 8h et 18h',
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/5kAg0Wfzlbzp2gEaEJ',
        bgColor: 'bg-lime-300',
      },
      {
        title: 'Tripple',
        price: '270€',
        priceSuffix: '/3month',
        features: [
          'Panier de fruits et legumes local Bio pour une semaine',
          'livraison uniquement le dimanche',
          "Vous pouvez proposer une l'horraire de votre choix entre 8h et 18h",
          'vous seriez prevenu par mail',
        ],
        buttonText: 'Commencez',
        buttonUrl:'https://buy.stripe.com/5kAg0Wfzlbzp2gEaEJ',
        bgColor: 'bg-lime-300',
      }],
  };

  return (
    <div className="">
      
      <div className="h-auto md:w-full lg:w-[50%] mx-[auto] pb-20">
          <h2 className="text-[1.7rem] font-extrabold text-center">
            {" "}
            Choisissez votre abonnement
          </h2>
          <p className="text-xl text-center">Commencez une Vie saine</p>
        </div>
      <div>
      <div className="flex justify-center mx-auto p-2 bg-slate-50 rounded-full w-fit mb-6">
        <button
          className={`px-10 py-4 mr-8 rounded-3xl ${selectedPlan === 'mixte' ? 'bg-orange-400 text-white' : 'bg-transparent '}`}
          onClick={() => handlePlanSelect('mixte')}
        >
          Mixte
        </button>
        <button
          className={`px-10 py-4 rounded-3xl ${selectedPlan === 'saison' ? 'bg-orange-400 text-white' : 'bg-transparent'}`}
          onClick={() => handlePlanSelect('saison')}
        >
          Saison
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {plans[selectedPlan].map((plan) =>  (
          <div
            key={plan.title}
            className={`${plan.bgColor} rounded-lg p-8 flex flex-col justify-between`}
          >
            <h2 className="text-2xl font-bold text-black mb-4">{plan.title}</h2>
            <p className="text-5xl font-extrabold text-black">
              {plan.price}
              <span className="text-lg font-normal text-black">
                {plan.priceSuffix}
              </span>
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-black">
                  <CheckCircleIcon className="text-black mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.buttonUrl}>
            <button
              className="mt-6 py-3 px-6 w-full text-white bg-black hover:bg-gray-800 rounded-full"
            >
              {plan.buttonText}
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PricingComponent;
