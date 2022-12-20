import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetail } from '../../../store/order/order.action';
import OrderItem from '../order-item/OrderItem';
import './OrderDetail.scss'

function OrderDetail() {
    const { id } = useParams()
    const ordersDispatch = useDispatch();
    const { orderDetail } = useSelector(
        (respone) => respone.orderState
    );
    useEffect(() => {
        ordersDispatch(getOrderDetail(id));
    }, []);
    return (
        <div>
            {
                orderDetail &&
                <OrderItem data={orderDetail} />
            }
        </div>
    )
}

export default OrderDetail