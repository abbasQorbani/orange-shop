import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartFill } from 'react-icons/ri';
import './CartButton.scss'
import { useSelector } from 'react-redux';

function CartButton() {
    const { totals } = useSelector(
        (respone) => respone.cartState
    );
    return (
        <Link to='/cart' className='cart-button'>
            <RiShoppingCartFill />
            <span>{totals.totalCount}</span>
        </Link>
    )
}

export default CartButton