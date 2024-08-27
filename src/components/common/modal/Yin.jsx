import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function YinModal() {
  const {isOpen, onOpen,  onOpenChange} = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            onPress={onOpen}
            className="capitalize px-16 py-10 lg:p-16 text-lg min-md:text-3xl font-bold rounded-full bg-white w-full"
          >
           Yin Yoga
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
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Découvrez le Yin Yoga :</ModalHeader>
              <ModalBody>
                <div>
                  <h2 className="font-bold">Qu'est-ce que le Yin Yoga ?</h2>
                <p> 
                Le Yin Yoga est une forme douce et méditative de yoga qui se concentre sur des étirements profonds et prolongés des tissus conjonctifs du corps. Il vise à améliorer la flexibilité et à ouvrir les articulations tout en apaisant l'esprit.
                </p>
                </div>
                <div>
                  <h2 className="font-bold">À Qui S'adresse le Yin Yoga ?</h2>
                  <h4>Le Yin Yoga est idéal pour :</h4> 
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Personnes Cherchant à se Détendre :
                    </h2>
                    <span>Le Yin Yoga est parfait pour ceux qui souhaitent réduire le stress et trouver un moment de calme grâce à des postures maintenues longtemps et une respiration consciente.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Personnes avec des Tensions Corporelles :
                    </h2>
                    <span>Si vous souffrez de tensions musculaires ou de douleurs articulaires, le Yin Yoga peut aider à relâcher les tensions profondes et à améliorer la mobilité.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Débutants :
                    </h2>
                    <span>Le Yin Yoga est accessible aux débutants, offrant une introduction douce aux postures de yoga et à la méditation.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Pratiquants de Yoga Avancés :
                    </h2>
                    <span>Ceux qui ont une pratique de yoga plus avancée peuvent trouver dans le Yin Yoga un complément parfait pour équilibrer les aspects dynamiques de leur pratique.
                    </span>
                    </div>
</div>
                <div>
                  <h2 className="font-bold">Les Bienfaits du Yin Yoga au Quotidien</h2>
                  <p>1. <span className="font-bold">Amélioration de la Flexibilité</span> : Les postures maintenues longtemps étirent les tissus conjonctifs, augmentant ainsi la flexibilité.
                  </p>
                  <p>2. <span className="font-bold">Réduction du Stress</span> : Le Yin Yoga calme le système nerveux et aide à réduire le stress et l'anxiété.
                  </p>
                  <p>3. <span className="font-bold">Amélioration de la Circulation</span> : Les étirements profonds favorisent la circulation sanguine et l'énergie vitale dans le corps.
                  </p>
                  <p>4. <span className="font-bold">Équilibre et Relaxation</span> : Le Yin Yoga équilibre l'énergie du corps et de l'esprit, offrant une relaxation profonde.
                  </p>
                  <p>5. <span className="font-bold">Méditation et Présence</span> : La pratique du Yin Yoga favorise la méditation et la pleine conscience, aidant à mieux gérer les pensées et les émotions.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Décliner
                </Button>
                <a href="http://calendly.com/donalddestin11">
                <Button color="primary" onPress={onClose}>
                Rejoignez-Nous pour une Séance de Yin Yoga
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
