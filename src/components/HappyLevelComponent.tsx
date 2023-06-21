import React from 'react';
import "../styles/HappyLevelComponent.css";

type ImageComponentProps = {
  StringIndex: string;
};

const HappyLevelComponent: React.FC<ImageComponentProps> = ({ StringIndex }) => {
  const getString = (be: string) => {
    switch (be) {
      case 'fr':
        return 'Be <br/> Friendly';
      case 'fit':
        return 'Fit';
      case 'hp':
        return 'Health';
      case 'op':
        return 'Open';
      case 'pro':
        return 'Pro';
      case 'eco':
        return 'Eco';
      default:
        return 'ИДИ\nНАХУЙ';
    }
  };

  const stringStatus = getString(StringIndex);

  return(
    <div className='status'>
        <img src='src/img/status.png'/>
        <br/>
        Be
        <br></br>
        {stringStatus}
    </div>
  )
};

export default HappyLevelComponent;
