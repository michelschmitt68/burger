import React from 'react';
import '../css/BuyList.css';

const BuyList = ({ buyList, totalPriceBuyList }) => {
  return (
    <div className="buy-item">
      <div className="buy-item-total">
        <p>Total :</p>
        <span>{totalPriceBuyList} €</span>
      </div>
      <ul className="list-item">
        {buyList.map((itemBuy, index) => (
          itemBuy.quantity !== 0 && ( 
          <li key={index} className="item">
            <p className="quantity">{itemBuy.quantity}</p>
            <p>{itemBuy.name}</p>          
            <p>{itemBuy.price * itemBuy.quantity}€</p>
          </li>
        )))}
      </ul>

    </div>

  );
};

export default BuyList;