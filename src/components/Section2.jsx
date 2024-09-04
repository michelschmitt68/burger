import recyclageImage from "../images/recyclage.jpg";
import comingSoon from "../images/comingsoon.jpg";
import produitsFrais from "../images/produits_frais.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import confetti from 'canvas-confetti';



export default function Section() {

function handleHover() {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#ff0', '#f0f', '#0ff']
        });
    }


  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });

  const { ref: cardRef2, inView: cardInView2 } = useInView({
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <div className="flex flex-col items-center gap-16 md:gap-12 bg-gray-50 p-20">

      <div className="flex flex-wrap justify-center gap-16 w-full max-w-screen-2xl">
        
        {/* Première carte */}
        <motion.div
          ref={cardRef}
          initial={{ x: -500, opacity: 0 }}
          animate={cardInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.9, 0, 1, 0.2],
          }}
          className="relative w-full md:w-[30%] h-[30vh] flex flex-col rounded-xl bg-green-100 cursor-pointer shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-200"
          >
          <div className="relative w-full h-full">
            <img
              src={recyclageImage}
              className="w-full h-full object-cover"
              alt="Recyclage"
            />
            <div className="absolute inset-0 bg-green-100 bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-300 p-4 flex items-center justify-center flex-col opacity-0 hover:opacity-100">
              <h1 className="text-green-800 text-3xl font-extrabold mb-6">
                Recyclons ensemble !
              </h1>
              <p className="text-green-800 text-xl text-center">
                Nous nous engageons à protéger l'environnement en réduisant les déchets et en promouvant des pratiques de recyclage durables.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Deuxième carte */}
        <motion.div
          ref={cardRef}
          initial={{ x: 500, opacity: 0 }}
          animate={cardInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="relative w-full md:w-[30%] h-[30vh] flex flex-col rounded-xl bg-blue-100 cursor-pointer shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500"
        >
          <div className="relative w-full h-full">
            <img
              src={comingSoon}
              className="w-full h-full object-cover"
              alt="Coming Soon"
            />
            <div className="absolute inset-0 bg-blue-100 bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-300 p-4 flex items-center justify-center flex-col opacity-0 hover:opacity-100">
              <h1 className="text-blue-800 text-3xl font-extrabold mb-6">
                A venir !
              </h1>
              <p className="text-blue-700 text-lg text-center">
                Nos nouveautés et toute l'actu.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Troisième carte */}
      <motion.div
        ref={cardRef2}
        initial={{ y: 300, opacity: 0 }}
        animate={cardInView2 ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="relative w-full md:w-[60%] h-[30vh] flex flex-col rounded-xl bg-gray-100 cursor-pointer shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500"
        onMouseEnter={handleHover}
      >
        <div className="relative w-full h-full">
          <img
            src={produitsFrais}
            className="w-full h-full object-cover"
            alt="Produits Frais"
          />
          <div className="absolute inset-0 bg-gray-100 bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-300 p-4 flex items-center justify-center flex-col opacity-0 hover:opacity-100">
            <h1 className="text-gray-800 text-3xl font-extrabold mb-6">
              Des produits frais
            </h1>
            <p className="text-gray-700 text-lg text-center">
            Nous sélectionnons avec soin chaque produit pour garantir une fraîcheur exceptionnelle dans tous nos plats. Découvrez la différence que des ingrédients de qualité peuvent apporter à votre expérience culinaire
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
