import MenuSelectedList from "../components/MenuSelectedList";
import BuyList from "../components/BuyList";
import CategorySelector from "../components/CategorySelector";
import { useState } from "react";
import "../css/TopBar.css";
import TitleMenuSelected from "../components/TitleMenuSelected";
import categoriesData from '../data/CategoriesData';




export default function NosMenus() {

    const [buyList, setBuyList] = useState([]);
    const [totalPriceBuyList, setTotalPriceBuyList] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Burgers");
    
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };

    const onAddToBuyList = (itemAdd) => {
      setBuyList(prevBuyList => {
        const existingItem = prevBuyList.find(item => item.name === itemAdd.name);
        if (existingItem) {
          return prevBuyList.map(item => 
            item.name === itemAdd.name ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevBuyList, { ...itemAdd, quantity: 1 }];
        }
      })
      setTotalPriceBuyList(totalPriceBuyList+itemAdd.price);
    };
    
    const onRemoveFromBuyList = (itemSub) => {
      const existingItem = buyList.find(item => item.name === itemSub.name);
      if (existingItem.quantity > 1) {
        setBuyList(buyList.map(item => 
          item.name === itemSub.name ? { ...item, quantity: item.quantity - 1 } : item
        ));
      } else {
        setBuyList(buyList.filter(item => item.name !== itemSub.name));
      }
      setTotalPriceBuyList(totalPriceBuyList-itemSub.price);
    };

    return (
      <div className="flex flex-col m-8 mt-36 items-center test">
          <TitleMenuSelected />
          <div className="flex flex-row items-center mt-20">
              <CategorySelector 
                  categories={Object.values(categoriesData)} 
                  onCategorySelect={handleCategorySelect} 
              />
              <MenuSelectedList
                  selectedCategory={selectedCategory}
                  items={categoriesData[selectedCategory].items}
                  buyList={buyList}
                  onAddToBuyList={onAddToBuyList}
                  onRemoveFromBuyList={onRemoveFromBuyList}         
              />
              <BuyList 
                buyList={buyList}
                totalPriceBuyList={totalPriceBuyList}
              />
          </div>
      </div>
  );
}


