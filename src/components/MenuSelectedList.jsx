import React from 'react';
import MenuItem from './MenuItem';
import '../css/AlimentList.css';



const ItemList = ({ selectedCategory, items, buyList, onAddToBuyList, onRemoveFromBuyList }) => {

    return (
        <div className="menuList">
            {items.map((item, index) => (
                <MenuItem 
                    key={index}
                    selectedCategory={selectedCategory}
                    item={item}
                    buyList={buyList}
                    onAddToBuyList={onAddToBuyList}
                    onRemoveFromBuyList={onRemoveFromBuyList}
                />
            ))}        
        </div>
    );
};

export default ItemList;