import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState, cartTotal } from '../../cartState';

CartInfo.propTypes = {};

function CartInfo(props) {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>Cart info:</h2>

      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>))
        }
      </ul>

      <p>TOTAL: {total} VND</p>
    </div>
  );
}

export default CartInfo;