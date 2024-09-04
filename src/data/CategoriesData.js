import logoBurger from "../images/icon/hamburger-logo.svg";
import logoDessert from "../images/icon/dessert-logo.svg";
import logoBoisson from "../images/icon/boisson-logo.svg";
import logoFrite from "../images/icon/frite-logo.svg";
import logoMenu from "../images/icon/menu_burger.png";

const categoriesData = {
  Menus: { 
    name: "Menus", 
    logo: logoMenu,
    items: [
      { id: 1, name: 'Menu DoubleCheese', items: ['DoubleCheese', 'Frites', 'Boisson'] },
      { id: 2, name: 'Menu Big corner', items: ['Big corner', 'Frites', 'Boisson'] },
      { id: 3, name: 'Menu Chicken', items: ['Chicken', 'Frites', 'Boisson'] },
    ]
  },
  Burgers: { 
    name: "Burgers", 
    logo: logoBurger,
    items: [
      { id: 1, name: 'Deluxe', ingredients: 'Pain, tomate, viande, fromage, bacon, oignons caramélisés, sauce spéciale', price: 5 },
      { id: 2, name: 'DoubleCheese', ingredients: 'Pain, tomate, double viande, double fromage, sauce spéciale', price: 5 },
      { id: 3, name: 'Big corner', ingredients: 'Pain, tomate, viande, fromage, cornichon, sauce spéciale', price: 5 },
      { id: 4, name: 'BTG', ingredients: 'Pain, laitue, viande, fromage, oignons, sauce spéciale', price: 5 },
      { id: 5, name: 'Cheese bacon', ingredients: 'Pain, tomate, viande, fromage, bacon, sauce spéciale', price: 5 },
      { id: 6, name: 'Special', ingredients: 'Pain, tomate, viande, fromage, sauce barbecue', price: 5 },
      { id: 7, name: 'Cheese', ingredients: 'Pain, viande, fromage, ketchup, moutarde', price: 5 },
      { id: 8, name: 'Spacy', ingredients: 'Pain, tomate, viande, fromage, sauce piquante', price: 5 },
      { id: 9, name: 'Royal', ingredients: 'Pain, laitue, tomate, viande, fromage, sauce royale', price: 5 },
      { id: 10, name: 'Master', ingredients: 'Pain, tomate, double viande, fromage, oignons caramélisés, sauce spéciale', price: 5 },
      { id: 11, name: 'Fish', ingredients: 'Pain, poisson pané, laitue, sauce tartare', price: 5 },
      { id: 12, name: 'Chicken', ingredients: 'Pain, poulet pané, tomate, laitue, mayonnaise', price: 5 },   
      { id: 13, name: 'DoubleCheese', ingredients: 'Pain, tomate, double viande, double fromage, sauce spéciale', price: 5 },
    ]
  },
  Boissons: { 
    name: "Boissons", 
    logo: logoBoisson,
    items: [
      { id: 1, name: 'Coca-Cola', size: '33cl', price: 2 },
      { id: 2, name: 'Pepsi', size: '33cl', price: 2 },
      { id: 3, name: 'Fanta', size: '33cl', price: 2 },
      { id: 4, name: 'Sprite', size: '33cl', price: 2 },
      { id: 5, name: 'Thé glacé', size: '33cl', price: 2.5 },
      { id: 6, name: 'Café', size: '20cl', price: 1.5 },
    ]
  },
  Desserts: { 
    name: "Desserts", 
    logo: logoDessert,
    items: [
      { id: 1, name: 'Cheese cake', price: 3.5 },
      { id: 2, name: 'Brownie', price: 4 },
      { id: 3, name: 'Glace framboise', price: 2.5 },
      { id: 4, name: 'Tiramisu', price: 3.5 },
      { id: 5, name: 'Salade de fruits', price: 3 },
    ]
  },
  Frites: { 
    name: "Frites", 
    logo: logoFrite,
    items: [
      { id: 1, name: 'Grande' },
      { id: 2, name: 'Moyenne' },
      { id: 3, name: 'Petite' },
    ]
  }
};

export default categoriesData;
