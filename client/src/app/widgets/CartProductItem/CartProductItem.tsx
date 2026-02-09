import cls from './CartProductItem.module.scss';

import close from '../../shared/assets/svg/close-circle.svg';
import console_play from '../../shared/assets/png/console_play2.png';
import console_play2 from '../../shared/assets/png/console_play3.png';
import React, { FC, useState } from 'react';

interface ProductItemProps {
  id: number;
  text: string;
  price: number;
  size: number;
  count: number;
};

export const CartProductItem: FC = () => {
  const [item, setItem] = useState<ProductItemProps[]>([
    { id: 1, text: "Play game", price: 11.70, size: 30, count: 1 },
    { id: 2, text: "Play game", price: 11.70, size: 30, count: 1 },
  ]);

  const changeCount = (id: number, delta: number) => {
    setItem(item.map(idx => 
      idx.id === id 
      ? {...idx, count: Math.max(0, idx.count + delta)}
      : idx
    ));
  };

  const removeProduct = (id: number) => {
    setItem(item.filter(i => i.id !== id));
  };

  return (
    <>
      {item.map((product) => (
        <React.Fragment key={product.id}>
          <div className={cls.cart_product_item}>
            <div className={cls.product_info}>
              <img src={product.id === 1 ? console_play : console_play2} alt="" />
              <div>
                <span>{product.text}</span>
                <p>Color: {product.id === 1 ? 'Green' : 'Black'}</p>
                <p>Size: {product.size}</p>
              </div>
            </div>
            
            <div className={cls.product_quantity}>
              <p>${product.price.toFixed(2)}</p>
              <div className={cls.counter}>
                <div onClick={() => changeCount(product.id, -1)} className={cls.count_minus}>-</div>
                <div className={cls.count_num}>{product.count}</div>
                <div onClick={() => changeCount(product.id, 1)} className={cls.count_plus}>+</div>
              </div>
              <p>${(product.price * product.count).toFixed(2)}</p>
              <img 
                onClick={() => removeProduct(product.id)} 
                src={close} 
                alt="remove" 
              />
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};

