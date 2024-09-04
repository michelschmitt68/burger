import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // L'animation se déclenche une seule fois
    threshold: 0.5, // Le pourcentage de visibilité de l'élément avant le déclenchement
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
