import React from 'react';
import "../styles/FaceComponent.css";

type ImageComponentProps = {
  imageIndex: string;
};

const FaceComponent: React.FC<ImageComponentProps> = ({ imageIndex }) => {
  const getImagePath = (be: string) => {
    switch (be) {
      case 'fr':
        return 'src/img/befriendly.png';
      case 'fit':
        return 'src/img/befit.png';
      case 'hp':
        return 'src/img/behealthy.png';
      case 'op':
        return 'src/img/beopen.png';
      case 'pro':
        return 'src/img/bepro.png';
      case 'eco':
        return 'src/img/beeco.png';
      default:
        return 'src/img/befriendly.png';
    }
  };

  const imagePath = getImagePath(imageIndex);

  return <img className = 'EBALO' src={imagePath} alt="Dynamic Image" />;
};

export default FaceComponent;
