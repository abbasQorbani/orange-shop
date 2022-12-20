import React from 'react'
import AdvancedButton from '../../global/advanced-button/AdvancedButton'
import defaultImage from '../../../assets/images/default.png';
import './CartItem.scss'
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteItem, increaseQty } from '../../../store/cart/cart.action';

function CartItem({ data }) {
    const mergedDispatch = useDispatch();
    function plus() {
      mergedDispatch(increaseQty(data._id));
    }
    function minus() {
      mergedDispatch(decreaseQty(data._id));
    }
    function handleDelete() {
      mergedDispatch(deleteItem(data._id));
    }
    return (
        <div className='cart-item'>
            <div className='cart-item__content-holder'>
                <div className='cart-item__image-holder'>
                    <img src={data.image} alt={data.name} onError={(event) => event.target.src = defaultImage} />
                </div>
                <p className='cart-item__name'>{data.name}</p>
            </div>
            <div className='cart-item__action-holder'>
                <span className='cart-item__price'>{data.price}</span>
                <AdvancedButton count={data.qty} onPlus={plus} onMinus={minus} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default CartItem