import React from 'react';
import backgroundImage from '../images/background.png';
import resto1 from  '../images/resto1.png';
import resto2 from '../images/resto2.png';
import resto3 from '../images/resto3.png';
import aPropos from '../images/a_propos.jpg';
import "../css/Accueil.css";
import "../css/SectionsAccueil.css";
import FadeInOnScroll from '../components/FadeInOnScroll';
import recyclageImage from "../images/recyclage.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function PageAccueil() {

  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

    return (
        <>
        

            <div className="image-container">
            <motion.img
              src={backgroundImage}
              alt="Image"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0]  }}  // Zoom in and out
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}  // Répète l'animation
              className="block w-full" 
            />
              <div className="image-overlay">Commandez sans plus attendre </div>
            </div>
            <div className="w-full h-96 bg-gray-100 z-20 flex items-center justify-center gap-10">
            <motion.div
                ref={textRef}
                initial={{ x: -100, opacity: 0 }}
                animate={textInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
                style={{ fontSize: "24px", color: "#333" }}
              >
                <img
                  src={aPropos}
                  alt="a propos"
                  className='h-64'
                />
              </motion.div>

              <motion.div
                ref={textRef}
                initial={{ x: 100, opacity: 0 }}
                animate={textInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
                style={{ fontSize: "24px", color: "#333" }}
              >
                <h1 className='font-serif  text-3xl font-extrabold mb-7'>A propos de nous !</h1>
                <p>Chez Burger Haven, nous sommes une entreprise familiale</p>
                <p>dédiée à vous offrir les meilleurs burgers en ville.</p> 
                <p>Notre équipe s'engage à vous servir des plats généreux et gourmands,</p> 
                <p>tout en vous garantissant une expérience client exceptionnelle.</p>
              </motion.div>
            </div>


            <div className="align-middle flex justify-center gap-28 mt-20">

              <div className='w-2/6 flex flex-col border-4 border-green-700 rounded-xl bg-green-400 cursor-pointer'>
                <img
                    src={recyclageImage}
                    className='w-full rounded-lg rounded-b-none'
                    alt='recyclage'
                />
                <div className=' w-full h-2 bg-green-400 mb-2'></div>
                <h1 className='text-green-700 text-2xl font-semibold m-3 '>Recyclons ensemble !</h1>
                <p className='m-3 text-xl'>Nous nous engageons à protéger l'environnement en réduisant les déchets et en 
                    promouvant des pratiques de recyclage durables. Ensemble, faisons de la planète 
                    un endroit plus propre et plus sain pour les générations futures. </p>

              </div>
              <div className='bg-red-700 w-2/6'></div>
            </div>

            <div className='flex justify-center'>
              <div className='bg-yellow-400 w-4/6 '></div>
            </div>

            <img 
              src={resto1}
              alt='resto1'
            />

            <img 
              src={resto1}
              alt='resto2'
            />

            <img 
              src={resto1}
              alt='resto3'
            />

        </>
      );
    }
