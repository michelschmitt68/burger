import React, { useState } from 'react';
import additionIcon from '../images/icon/addition.png';
import substractionIcon from '../images/icon/substract.png';



const Item = ({ selectedCategory, item, buyList, onAddToBuyList, onRemoveFromBuyList }) => {


  const imageUrl = require(`../images/${selectedCategory}/${item.id}.png`);

  const existingItem = buyList.find(itemBuyList => itemBuyList.name === item.name);

  return (
      <div className="aliment">
        <h3 className="aliment-name">{item.name}</h3>
        <img 
          src={imageUrl}  
          alt={selectedCategory} 
          className="w-100 h-64 mx-auto block mb-2"
        />
        
        <div className="flex items-center r gap-2 mt-2">
          <div className='aliment-price w-1/2'>{item.price} €</div>
          {existingItem
          &&(
            <img 
            src={substractionIcon} 
            alt="Remove" 
            className="w-10 h-10 cursor-pointer"        
            onClick={() => onRemoveFromBuyList(item)}  
          />
          )}
     
          <img 
            src={additionIcon} 
            alt="Add" 
            className="w-10 h-10 cursor-pointer" 
            onClick={() => onAddToBuyList(item)} 
          />
        </div> 
      </div>

  );
};

export default Item;
