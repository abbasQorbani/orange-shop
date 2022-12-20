import { Provider } from 'react-redux';
import MergedStore from '../../../store/merged/merged.store';
import LoginButton from '../../auth/login-button/LoginButton';
import CartButton from '../../cart/cart-button/CartButton';
import './Header.scss';

function Header() {
  return (
    <header className="header">
        <span>Orange Shop</span>
        <div className='header__cart-holder'>
            <Provider store={MergedStore}>
              <CartButton />
              <LoginButton />
            </Provider>
        </div>
    </header>
  );
}

export default Header;
