import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAdDetail } from '../../../store/ad/ad-detail/adDetail.action';
import { addToCart, decreaseQty, deleteItem, increaseQty } from '../../../store/cart/cart.action';
import defaultImage from '../../../assets/images/default.png';
import { CgDollar } from 'react-icons/cg';
import { GiRoundStar } from 'react-icons/gi';
import './AdDetail.scss'
import OshButton from '../../global/button/Button';
import AdvancedButton from '../../global/advanced-button/AdvancedButton';
import { pushToastList } from '../../../store/toast/toast.action';

function AdDetail() {
    const { id } = useParams()
    const mergedDispatch = useDispatch();
    const { adDetailState, cartState } = useSelector(
        (respone) => respone
    );
    const adDetailLoading = adDetailState.loading
    const adDetailError = adDetailState.error
    const { adDetail } = adDetailState
    const {loading, cartList, error} = cartState
    let product = null
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        mergedDispatch(getAdDetail(id));
    }, []);
    function handleAddToCart() {
        mergedDispatch(addToCart(adDetail));
        mergedDispatch(pushToastList({
            text: 'Item Added To Your Cart!!' + counter,
            type: 'success'
        }));
        setCounter(counter + 1)
    }
    function getProductFromCart() {
        cartList.forEach(cartProduct => {
            if (cartProduct._id === id) {
                product = cartProduct
            }
        })
        return product
    }
    function plus() {
      mergedDispatch(increaseQty(id));
    }
    function minus() {
      mergedDispatch(decreaseQty(id));
    }
    function handleDelete() {
      mergedDispatch(deleteItem(id));
    }
    return (
        <div className='osh-ad-detail'>
            <div className='osh-ad-detail__header'>
                <div className='osh-ad-detail__image-holder'>
                    <img src={adDetail.image} alt={adDetail.name} onError={(event) => event.target.src = defaultImage} />
                </div>
                <div className='osh-ad-detail__detail-holder'>
                    <div className='osh-ad-detail__detail osh-ad-detail__detail--full-width'>
                        <span>name: {adDetail.name}</span>
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>brand: {adDetail.brand}</span>
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>category: {adDetail.category}</span>
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>color: {adDetail.color}</span>
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>price: {adDetail.price}</span>
                        <CgDollar />
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>rating: {adDetail.rating}</span>
                        <GiRoundStar />
                    </div>
                    <div className='osh-ad-detail__detail'>
                        <span>countInStock: {adDetail.countInStock}</span>
                    </div>
                </div>
            </div>
            <p className='osh-ad-detail__description'>{adDetail.description}</p>
            {
                adDetail.countInStock === 0 ?
                <span className='osh-ad-detail__out'>Out of order</span> :
                getProductFromCart() ?
                <AdvancedButton count={product.qty} onPlus={plus} onMinus={minus} onDelete={handleDelete} /> :
                <OshButton text='add to cart' disabled={false} click={handleAddToCart} />
            }
        </div>
    )
}

export default AdDetail
