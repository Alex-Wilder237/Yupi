import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function KundaliniModal() {
  const {isOpen, onOpen,  onOpenChange} = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            onPress={onOpen}
            className="capitalize px-16 py-10 lg:p-16 text-lg min-md:text-3xl font-bold rounded-full bg-white w-full"
          >
           Kundalini Yoga
          </Button>
      
      </div>
      <Modal backdrop="blur" size="xl" isOpen={isOpen} scrollBehavior="inside" placement="center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            },
          }
        }} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Découvrez le Kundalini Yoga :</ModalHeader>
              <ModalBody>
                <div>
                  <h2 className="font-bold">Qu'est-ce que le Kundalini Yoga ?</h2>
                <p> 
                Le Kundalini Yoga est une forme de yoga qui combine postures physiques, techniques de respiration, chants et méditation pour éveiller l'énergie kundalini, souvent représentée comme une force spirituelle dormant à la base de la colonne vertébrale.
                </p>
                </div>
                <div>
                  <h2 className="font-bold">À Qui S'adresse le Kundalini Yoga ?</h2>
                  <h4>Le Kundalini Yoga est idéal pour :</h4> 
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Chercheurs de Spiritualité :
                    </h2>
                    <span>Le Kundalini Yoga est parfait pour ceux qui cherchent à approfondir leur connexion spirituelle et à explorer leur conscience intérieure.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Personnes Stressées :
                    </h2>
                    <span>Grâce à ses techniques de respiration et ses méditations, le Kundalini Yoga aide à réduire le stress et à équilibrer les émotions.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Débutants en Yoga :
                    </h2>
                    <span>Les séquences de Kundalini Yoga sont souvent accessibles aux débutants, offrant un moyen d'intégrer le yoga dans leur vie quotidienne.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Pratiquants de Yoga Avancés :
                    </h2>
                    <span>Ceux qui cherchent à approfondir leur pratique trouveront dans le Kundalini Yoga un défi enrichissant, tant sur le plan physique que spirituel.
                    </span>
                    </div>
</div>
                <div>
                  <h2 className="font-bold">Les Bienfaits du Kundalini Yoga au Quotidien</h2>
                  <p>1. <span className="font-bold">Éveil de l'Énergie</span> : Le Kundalini Yoga aide à éveiller et à canaliser l'énergie kundalini, favorisant une transformation personnelle profonde.
                  </p>
                  <p>2. <span className="font-bold">Réduction du Stress</span> : Les techniques de respiration et les méditations aident à calmer l'esprit et à réduire le stress et l'anxiété.
                  </p>
                  <p>3. <span className="font-bold">Amélioration de la Flexibilité et de la Force</span> : Les postures physiques renforcent et étirent le corps, améliorant ainsi la flexibilité et la force.
                  </p>
                  <p>4. <span className="font-bold">Équilibre Émotionnel</span> : Le Kundalini Yoga équilibre les émotions et aide à mieux gérer les situations stressantes.
                  </p>
                  <p>5. <span className="font-bold">Augmentation de l'Énergie</span> : La pratique régulière revitalise le corps et l'esprit, augmentant ainsi les niveaux d'énergie et de vitalité.
                  </p>
                  <p>6. <span className="font-bold">Méditation et Pleine Conscience</span> : La combinaison de méditation et de chants dans le Kundalini Yoga favorise la pleine conscience et une meilleure gestion des pensées et des émotions.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Décliner
                </Button>
                <a href="http://calendly.com/donalddestin11">
                <Button color="primary" onPress={onClose}>
                Rejoignez-Nous pour une Séance de Kundalini Yoga
                </Button>
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
