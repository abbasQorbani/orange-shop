import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import './CartPage.scss';
import { Link } from 'react-router-dom';

function CartPage() {
    const { authState, cartState } = useSelector(
        (respone) => respone
    );
    const { cartList, totals } = cartState
    const { userData } = authState
    return (
        <div className='cart-page'>
            {
                cartList.length === 0 ?
                <p>Your Cart Is Empty ...</p> :
                cartList.map(itemData => {
                    return <CartItem data={itemData} key={itemData._id} />
                })
            }
            <div className='cart-page__footer'>
                <span>total price: {totals.totalPrice} </span>
                {
                    cartList.length !== 0 ?
                    userData ?
                    <Link to='/address'>Next</Link>:
                    <Link to='/login'>Log In</Link> :
                    null
                }
            </div>
        </div>
    )
}

export default CartPage