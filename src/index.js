import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/global-styles/mixin.scss'
import './assets/global-styles/reset.scss'
import Header from './components/global/header/Header';
import AdList from './components/ad/ad-list/AdList';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdDetail from './components/ad/ad-detail/AdDetail';
import MergedStore from './store/merged/merged.store';
import AdListStore from './store/ad/ad-list/adList.store';
import OrderStore from './store/order/order.store'
import CartPage from './components/cart/cart-page/CartPage';
import LoginPage from './components/auth/login-page/LoginPage';
import SignUpPage from './components/auth/sign-up-page/SignUpPage';
import CartAddress from './components/cart/cart-address/CartAddress';
import CartCheckout from './components/cart/cart-checkout/CartCheckout';
import ProfilePage from './components/profile/profile-page/ProfilePage';
import OrdersPage from './components/order/orders-page/OrdersPage';
import OrderDetail from './components/order/order-detail/OrderDetail';
import SettingPage from './components/setting/setting-page/SettingPage';
import Toast from './components/global/toast/Toast';
import IntHelper from './components/global/int-helper/IntHelper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={MergedStore}>
      <IntHelper />
    </Provider>
    <BrowserRouter>
      <div className='orange-shop-wrapper'>
        <Header />
        <Routes>
          <Route path='/ad-list' element={
            <Provider store={AdListStore}>
              <AdList />
            </Provider>
          }>
          </Route>
          <Route path='/ad-detail/:id' element={
            <Provider store={MergedStore}>
              <AdDetail />
            </Provider>
          }>
          </Route>
          <Route path='/cart' element={
            <Provider store={MergedStore}>
              <CartPage />
            </Provider>
          }>
          </Route>
          <Route path='/login' element={
            <Provider store={MergedStore}>
              <LoginPage />
            </Provider>
          }>
          </Route>
          <Route path='/sign-up' element={
            <Provider store={MergedStore}>
              <SignUpPage />
            </Provider>
          }>
          </Route>
          <Route path='/address' element={
            <Provider store={MergedStore}>
              <CartAddress />
            </Provider>
          }>
          </Route>
          <Route path='/checkout' element={
            <Provider store={MergedStore}>
              <CartCheckout />
            </Provider>
          }>
          </Route>
          <Route path='/profile' element={
            <Provider store={MergedStore}>
              <ProfilePage />
            </Provider>
          }>
          </Route>
          <Route path='/orders' element={
            <Provider store={OrderStore}>
              <OrdersPage />
            </Provider>
          }>
          </Route>
          <Route path='/order/:id' element={
            <Provider store={OrderStore}>
              <OrderDetail />
            </Provider>
          }>
          </Route>
          <Route path='/setting' element={
            <Provider store={MergedStore}>
              <SettingPage />
            </Provider>
          }>
          </Route>
        </Routes>
      </div>
      <Provider store={MergedStore}>
        <Toast />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
