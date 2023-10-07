import React, { useContext } from 'react';
import { ObjectContext } from '../shop/Context';
import Star1 from '../../../assets/star.svg';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(ObjectContext);
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className='mx-auto container w-[95%]'>
      <div className='cart_page'>
        {cart.map((item) => (
          <div className='shopping_img_divs' key={item.id}>
            <div className='img_oradigan_div'>
              <img src={item.image} alt='' />
            </div>
            <p className='map_item_name'>{item.name}</p>
            <div className='yonma_yon'>
              <p className='item_price_shop'>{item.price}</p>
              <img src={Star1} alt='' />
            </div>
            <button
              className='custom-btn btn-12'
              onClick={() => removeFromCart(item.id)}
            >
              <span>Remove</span>
              <span>Remove Item</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
