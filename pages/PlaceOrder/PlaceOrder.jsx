import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const {getTotalAmount} =useContext(StoreContext)
  const navigate = useNavigate();



  return (
    <div className='place-order'>
      <form className='place-order-form'>
        <div className="place-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-field">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Street' />
        </div>
        <div className="place-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-detail">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <p>Delivery Fee</p>
                <p>${3}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <b>Total</b>
                <b>${getTotalAmount() +3}</b>
              </div>
              <button type="button" onClick={() => navigate('/order')}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
