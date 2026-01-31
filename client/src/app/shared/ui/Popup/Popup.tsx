import cls from './Popup.module.scss';
import React from 'react';

import arrow_down from '../../../shared/assets/svg/arrow-down-black.svg';

export const Popup = () => {
  const [isPopupActive, setIsPopupActive] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(0);
  const popupList = [];

  return (
    <div className={cls.page}>
      <li>Pages</li>
      <img src={arrow_down} alt="" />
    </div>
  );
};
