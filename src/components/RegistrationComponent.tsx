import React, { useState, useEffect } from 'react';
import '../styles/RegistrationComponent.css';

const RegistrationComponent: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [imagesVisible1, setImageVisible1] = useState(true);
  const [imagesVisible2, setImageVisible2] = useState(true);

  const handleImageClick = (imageId: number) => {
    if (imageId === 1) {
      setImageVisible1(false);
      setShowMessage(true);
    } else if (imageId === 2) {
      setImageVisible2(false);
      setShowMessage(true);
    }
  };

  const handleMessageClick = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showMessage]);

  return (
    <div>
      {imagesVisible1 && (
        <div className="image-container1">
          <img
            src="src/img/mero1.png"
            alt="Image 1"
            onClick={() => handleImageClick(1)}
            className={`mero1 ${imagesVisible1 ? 'slide-in' : ''}`}
          />
        </div>
      )}
      {imagesVisible2 && (
        <div className="image-container2">
          <img
            src="src/img/mero2.png"
            alt="Image 2"
            onClick={() => handleImageClick(2)}
            className={`mero2 ${imagesVisible2 ? 'slide-in' : ''}`}
          />
        </div>
      )}
      {showMessage && (
        <div className="mes-container">
          <img
            src="src/img/mes.png"
            onClick={handleMessageClick}
            className={`mes ${showMessage ? 'slide-out' : ''}`}
          />
        </div>
      )}
    </div>
  );
};

export default RegistrationComponent;
