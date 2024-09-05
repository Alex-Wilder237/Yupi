import { useState } from "react";
import "./modalStyle.css"; // Assurez-vous d'importer vos styles pour les animations

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Veuillez entrer une adresse e-mail.");
      setIsErrorModalOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setEmail(""); // Réinitialiser l'email après le succès
      } else {
        setErrorMessage("Échec de l'abonnement. Veuillez réessayer.");
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Erreur d'envoi des données : ", error);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      setIsErrorModalOpen(true);
    }
  };

  return (
    <section className="lg:h-svh py-[50px] flex justify-center items-center">
      <div className="container bg-blue-100 w-[90%] lg:w-[80%] m-[auto] p-10 lg:py-[100px] rounded-3xl flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-[1.7rem] font-extrabold text-center">Ne Manquez Rien !</h2>
          <p className="text-xl text-center lg:w-2/3 mx-auto">
            Recevez les dernières nouvelles et offres spéciales de Yupi
          </p>
        </div>
        <form className="lg:w-1/2 flex flex-wrap max-sm:gap-2 lg:flex-nowrap" onSubmit={handleSubmit}>
          <input
            className="px-10 w-full rounded-lg py-4"
            type="email"
            name="email"
            placeholder="ex:johndoe@gmail.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-400 text-lg mx-auto max-sm:w-full lg:rounded-md font-extrabold px-6 py-4"
          >
            Souscris
          </button>
        </form>
      </div>

      {/* Modale de succès */}
      {isSuccessModalOpen && (
        <div className="modal">
          <div className="modal-content animate-modal">
            <h3>Merci pour votre abonnement !</h3>
            <button
              className="bg-green-500 px-4 py-2 mt-4 text-white rounded-md"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modale d'erreur */}
      {isErrorModalOpen && (
        <div className="modal">
          <div className="modal-content animate-modal">
            <h3>{errorMessage}</h3>
            <button
              className="bg-red-500 px-4 py-2 mt-4 text-white rounded-md"
              onClick={() => setIsErrorModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Newsletter;
