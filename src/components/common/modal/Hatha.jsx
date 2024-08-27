import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function HathaModal() {
  const {isOpen, onOpen,  onOpenChange} = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            onPress={onOpen}
            className="capitalize px-16 py-10 lg:p-16 text-lg min-md:text-3xl font-bold rounded-full bg-white w-full"
          >
           Hatha Yoga
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
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Découvrez le Hatha Yoga :</ModalHeader>
              <ModalBody>
                <div>
                  <h2 className="font-bold">Qu'est-ce que le Hatha Yoga ?</h2>
                <p> 
                Le Hatha Yoga est une forme traditionnelle de yoga qui se concentre sur des postures physiques (asanas) et des techniques de respiration (pranayama). Il vise à équilibrer le corps et l'esprit en développant la force, la flexibilité et la concentration.
                </p>
                </div>
                <div>
                  <h2 className="font-bold">À Qui S'adresse le Hatha Yoga ?</h2>
                  <h4>Le Hatha Yoga est idéal pour :</h4> 
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Débutants :
                    </h2>
                    <span>Si vous débutez dans le yoga, le Hatha est une excellente introduction aux postures de base et aux techniques de respiration.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Personnes Cherchant à se Détendre :
                    </h2>
                    <span>Le Hatha Yoga est parfait pour ceux qui cherchent à réduire le stress et à se détendre grâce à des postures douces et une respiration consciente.</span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Travailleurs Sédentaires :
                    </h2>
                    <span>Si vous passez beaucoup de temps assis, le Hatha Yoga peut aider à améliorer votre posture et à soulager les tensions corporelles.</span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Pratiquants Avancés :
                    </h2>
                    <span>Ceux qui ont déjà une pratique de yoga peuvent approfondir leur compréhension des postures et des techniques de respiration avec le Hatha Yoga.
                    </span>
                    </div>
</div>
                <div>
                  <h2 className="font-bold">Les Bienfaits du Hatha Yoga au Quotidien</h2>
                  <p>1. <span className="font-bold">Amélioration de la Flexibilité et de la Force</span> : Chaque séance de Hatha Yoga sollicite différents groupes musculaires, augmentant ainsi progressivement la flexibilité et la force.</p>
                  <p>2. <span className="font-bold">Réduction du Stress</span> : Les techniques de respiration et les postures aident à calmer l'esprit et à réduire le stress.</p>
                  <p>3. <span className="font-bold">Amélioration de la Posture</span> : Le Hatha Yoga aide à corriger les déséquilibres posturaux et à renforcer les muscles du dos.</p>
                  <p>4. <span className="font-bold">Équilibre et Coordination</span> : Les postures de Hatha Yoga améliorent la coordination et l'équilibre du corps.</p>
                  <p>5. <span className="font-bold">Énergie et Vitalité</span> : En stimulant la circulation sanguine et en améliorant la respiration, le Hatha Yoga revitalise le corps et augmente les niveaux d'énergie.</p>
                  <p>6. <span className="font-bold">Méditation et Concentration</span> : La pratique du Hatha Yoga favorise la méditation et la concentration, aidant à mieux gérer les pensées et les émotions.</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Décliner
                </Button>
                <a href="http://calendly.com/donalddestin11">
                <Button  color="primary" onPress={onClose}>
                Rejoignez-Nous pour une Séance de Hatha Yoga
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
