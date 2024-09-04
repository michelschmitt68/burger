
import { NavLink } from 'react-router-dom';
import navLogo from '../images/icon/chefs-hat.png';


export default function NavBar () {
    return(
      <div className='NavBar'>
        <nav className=" p-4 shadow-lg">
        <div className=" container mx-auto flex justify-around items-center">
          <img
            src={navLogo} 
            alt="navLogo"
            className='w-12 h-12'/>
          <NavLink 
              to="/Accueil" 
              className={({ isActive }) => 
                isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
              }  
            >
              <h1>Accueil</h1>
            </NavLink>
            <NavLink 
              to="/NosMenus" 
              className={({ isActive }) => 
                isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
              }
            >
              <h1>Nos Menus</h1>
            </NavLink>
            <NavLink 
              to="/Contact" 
              className={({ isActive }) => 
                isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
              }
            >
              <h1>Contact</h1>
            </NavLink>
          </div>
      </nav>
      <div class='bg-blue-900 h-2 shadow-xl barre_orange'></div>
    </div>
    );
}