import React,{useContext} from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import {useNavigate} from 'react-router-dom'
import { assets } from '../../assets/assets'
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalAmount} =useContext(StoreContext)
  const navigate= useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>

              <div className="cart-item-title cart-items-item">
               <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{cartItems[item._id]}</p>
               <p>{item.price*cartItems[item._id]}</p>
               <p onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
       <div className='cart-bottom'>
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-detail">
                    <p>subtotal</p>
                    <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
               <p>del fee</p>
               <p>${getTotalAmount()===0?0:40}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
               <b>total</b>
               <b>${getTotalAmount()===0?0:getTotalAmount()+40}</b>
              </div>
              <button onClick={()=>navigate('/order')}>proceed to chekout</button>
          </div>
          <div className="cart-promocode">
            <div >
              <p>if you have code,enter code</p> 
              <div className="cart-promocode">
              <input type="text" placeholder='enter code' />
              <button>submit</button>
              </div>
             
            </div>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Cart
