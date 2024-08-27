import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function VinyasaModal() {
  const {isOpen, onOpen,  onOpenChange} = useDisclosure();


  return (
    <>
      <div className="flex flex-wrap gap-3">
          <Button  
            variant="flat" 
            onPress={onOpen}
            className="capitalize px-16 py-10 lg:p-16 text-lg min-md:text-3xl font-bold rounded-full bg-white w-full"
          >
           Vinyasa Yoga
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
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">Découvrez le Vinyasa Yoga :</ModalHeader>
              <ModalBody>
                <div>
                  <h2 className="font-bold">Qu'est-ce que le Vinyasa Yoga ?</h2>
                <p> 
                Le Vinyasa Yoga est une forme dynamique de yoga qui relie chaque mouvement à une respiration spécifique. Souvent appelé "flow yoga", il se caractérise par des enchaînements fluides de postures qui créent une méditation en mouvement, favorisant ainsi une harmonisation du corps et de l'esprit.
                </p>
                </div>
                <div>
                  <h2 className="font-bold">À Qui S'adresse le Vinyasa Yoga ?</h2>
                  <h4>Le Vinyasa Yoga est idéal pour :</h4> 
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Débutants :
                    </h2>
                    <span>Si vous êtes nouveau dans le monde du yoga, le Vinyasa vous permet de vous familiariser avec les postures de base tout en améliorant votre flexibilité et votre endurance.
                    </span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Sportifs :
                    </h2>
                    <span>Les athlètes et les amateurs de fitness bénéficient de l'intégration du Vinyasa dans leur routine pour améliorer leur force, leur souplesse et leur équilibre.</span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Personnes Stressées :
                    </h2>
                    <span>Le rythme dynamique et la concentration sur la respiration aident à réduire le stress et à promouvoir la détente.</span>
                    </div>
                  <div>
                    <h2 className="font-bold mt-4">
                    Les Débutants :
                    </h2>
                    <span>Si vous êtes nouveau dans le monde du yoga, le Vinyasa vous permet de vous familiariser avec les postures de base tout en améliorant votre flexibilité et votre endurance.
                    </span>
                    </div>
</div>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Decliner
                </Button>
                <a href="http://calendly.com/donalddestin11">
                <Button color="primary" onPress={onClose}>
                Rejoignez-Nous pour une Séance de Vinyasa Yoga
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
