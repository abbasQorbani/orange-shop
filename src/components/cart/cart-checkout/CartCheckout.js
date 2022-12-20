import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import './CartCheckout.scss';
import { Link, Navigate } from 'react-router-dom';
import OshButton from '../../global/button/Button';
import axios from 'axios';
import { clearCart } from '../../../store/cart/cart.action';

function CartCheckout() {
    const mergedDispatch = useDispatch()
    const { cartState, authState } = useSelector(
        (respone) => respone
    );
    const { cartList, totals } = cartState
    const { userData, userAddress} = authState
    const [submited, setSubmited] = useState(false)
    function generateOrderItems() {
        let orderItems = []
        cartList.forEach(itemData => {
            orderItems.push({
                product: itemData._id,
                qty: itemData.qty
            })
        });
        return orderItems
    }
    function submitOrder() {
        axios.post('http://kzico.runflare.run/order/submit', {
            orderItems: generateOrderItems(),
            shippingAddress: {
                address: userAddress.postalAddress,
                city: userAddress.city,
                postalCode: userAddress.postalCode,
                phone: userAddress.mobile
            },
            paymentMethod: "cash",
            shippingPrice: "5",
            totalPrice: totals.totalPrice + 5,
        },
        {
            headers: {
                authorization:
                "Bearer " + userData.token,
            },
        }).then(() => {
            setSubmited(true)
            mergedDispatch(clearCart())
        })
    }
    return (
        <div className='checkout-page'>
            {
                cartList.map(itemData => {
                    return <CartItem data={itemData} key={itemData._id} />
                })
            }
            <div className='checkout-page__footer'>
                <Link to='/cart'>Edit</Link>
                <span>total price: {totals.totalPrice} </span>
                <OshButton text='Done' disabled={false} click={submitOrder} />
            </div>
            {
                submited &&
                <Navigate to='/ad-list'></Navigate>
            }
        </div>
    )
}

export default CartCheckout