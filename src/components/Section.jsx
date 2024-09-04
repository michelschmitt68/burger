
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aPropos from '../images/a_propos.jpg';

export default function Section() {

    const { ref: textRef, inView: textInView } = useInView({ 
      triggerOnce: true,
      threshold: 0.8 
     });

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto bg-gray-100 z-20 p-6 md:p-20 gap-10 md:gap-20">
          <motion.div
            ref={textRef}
            initial={{ x: -100, opacity: 0 }}
            animate={textInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={aPropos}
              alt="A propos"
              className="h-60 w-auto md:h-96 rounded-2xl"
            />
          </motion.div>
    
          <motion.div
            ref={textRef}
            initial={{ x: 100, opacity: 0 }}
            animate={textInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="font-serif text-2xl md:text-3xl font-extrabold mb-4 md:mb-7">
              À propos de nous !
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Chez Burger Haven, nous sommes une entreprise familiale dédiée à vous offrir les meilleurs burgers en ville.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Notre équipe s'engage à vous servir des plats généreux et gourmands,
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              tout en vous garantissant une expérience client exceptionnelle.
            </p>
          </motion.div>
        </div>
      );
}