import React from 'react';
import backgroundImage from '../images/background.png';
import resto1 from  '../images/resto1.png';
import resto2 from '../images/resto2.png';
import resto3 from '../images/resto3.png';
import "../css/Accueil.css";
import "../css/SectionsAccueil.css";
import FadeInOnScroll from '../components/FadeInOnScroll';
import { motion } from "framer-motion";
import Section from "../components/Section";
import Section2 from '../components/Section2';




export default function PageAccueil() {


    return (
        <>
        

            <div className="relative overflow-hidden image-container ">
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
            
            <Section />
            <Section2 />

            <div className='flex justify-center'>
              <div className='bg-yellow-400 w-4/6 '></div>
            </div>

        </>
      );
    }
