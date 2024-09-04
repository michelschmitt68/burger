import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NosMenus from './pages/NosMenus';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import PageError from './pages/PageError';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,  
    errorElement: <PageError />,  
    children: [
      {
        path: 'Accueil',
        element: <Accueil />,
      },
      {
        path: 'NosMenus',
        element: <NosMenus />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ],
  },
]);

// Composant Root, utilisé pour encapsuler la navigation (Menu) et les vues de contenu
function Root() {
  return (
    <div className="app-container">
      <Navbar />  {/* Menu de navigation */}
      <Outlet /> {/* Affichage du contenu des routes enfants */}
      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}
