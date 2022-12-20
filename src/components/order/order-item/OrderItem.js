import React from 'react'
import { Link } from 'react-router-dom'
import './OrderItem.scss'

function OrderItem({ data }) {
  return (
    <Link to={'/order/' + data._id} className='order-item'>
        <p>items count: {data.orderItems.length}</p>
        <p>payment method: {data.paymentMethod}</p>
        <p>city: {data.shippingAddress.city}</p>
        <p>shipping price: {data.shippingPrice}</p>
        <p>total price: {data.totalPrice}</p>
    </Link>
  )
}

export default OrderItem