import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../store/order/order.action';
import OrderItem from '../order-item/OrderItem';
import './OrdersPage.scss'

function OrdersPage() {
    const ordersDispatch = useDispatch();
    const { ordersList } = useSelector(
        (respone) => respone.orderState
    );
    useEffect(() => {
        ordersDispatch(getOrders());
    }, []);
    return (
        <div>
            {
                ordersList.map(order => {
                    return <OrderItem data={order} key={order._id} />
                })
            }
        </div>
    )
}

export default OrdersPage