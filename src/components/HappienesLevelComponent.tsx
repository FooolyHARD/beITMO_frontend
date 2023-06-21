import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import "../styles/HappienesLevelComponent.css"

type HappinessLevelProps = {
  happinessLevel: number;
  args: number[];
};

const HappinessLevel: React.FC<HappinessLevelProps> = ({ happinessLevel, args }) => {
  return (
    <div>
      <span className='holder' data-tip="Это уровень вашего счастья" data-multiline="true">
        Уровень счастья: {happinessLevel}
      </span>
      <Tooltip anchorSelect='.holder' place="bottom">
        Вовлеченность {args[0]}<br/>
        Удовлетворенность {args[1]} <br/>
        Мотивация {args[2]}<br/>
       Cубъективное благополучие {args[3]}
      </Tooltip>
    </div>
  );
};


export default HappinessLevel;
