import React from 'react';
import Card from '../../01-Atoms/Card/Card';

const CardsContainer = () => {
  return (

    <div style={{ display: 'flex', gap: '32px', height: '312px'}}>

      <Card imageUrl="images/Aa.svg" text="Проверка цветового контраста" destination="/ffffff/1a1a1e"/>

      <Card imageUrl="images/Type scale.svg" text="Типографическая шкала" destination="/typographic-scale"/>

      <Card imageUrl="images/More.svg" text="Тут будет что-то еще" destination="/" />

    </div>

  );
};

export default CardsContainer;