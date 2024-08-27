import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState('mixte');
  const stripePromise = loadStripe('your-publishable-key-here');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscription = async (priceId) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [{ price: priceId, quantity: 1 }],
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });

    if (error) {
      console.error("Stripe Checkout error:", error);
    }
  };

  const plans = {
    mixte: [
      { id: 'price_1month_mixte', title: 'Abonnement  Simple', price: '100€/ 1mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le dimanche tout la journée entre 8h et 18h nous allons vous prévenir /mail ou message' },
      { id: 'price_2months_mixte', title: 'Abonnement Double', price: '190€/ 2mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le  Dimanche vous pouvez proposer une plage horaire de 2h entre 8h et 18h .' },
      { id: 'price_3months_mixte', title: 'Abonnement Triple', price: '270€/ 3mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le  Dimanche vous pouvez proposer l’horaire qui vous convient entre 8h et 18h' },
    ],
    saison: [
      { id: 'price_1month_mixte', title: 'Abonnement  Simple', price: '120€/ 1mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le dimanche tout la journée entre 8h et 18h nous allons vous prévenir /mail ou message' },
      { id: 'price_2months_mixte', title: 'Abonnement Double', price: '160€/ 2mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le  Dimanche vous pouvez proposer une plage horaire de 2h entre 8h et 18h .' },
      { id: 'price_3months_mixte', title: 'Abonnement Triple', price: '200€/ 3mois', description: 'Ce panier contient une sélection variée de fruits et légumes BIO pour une semaine. Livraison uniquement le  Dimanche vous pouvez proposer l’horaire qui vous convient entre 8h et 18h' },
    ],
  };

  return (
    <div className="p-6 ">
      
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
        {plans[selectedPlan].map((plan) => (
          <div key={plan.id} className="p-8 rounded-3xl bg-slate-50">
            <h2 className="text-md  font-bold mb-2">{plan.title}</h2>
            <p className="text-3xl text-orange-400 font-extrabold mb-4">{plan.price}</p>
            <p className="text-gray-600 text-lg mt-8">{plan.description}</p>
            <button
              className="hover:bg-black bg-gray-600 rounded-3xl w-full text-white mt-8 px-4 py-2"
              onClick={() => handleSubscription(plan.id)}
            >
              S'abonner
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PricingComponent;
