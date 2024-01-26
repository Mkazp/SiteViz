import React, { useState } from 'react';
import styles from './Achivment.module.scss';

const Achivment = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  const images = Array.from({ length: 19 }, (_, index) => `persA/image${index + 1}.jpg`);

  return (
    <div>
      <h1 className={styles.title}>Мои Достижения</h1>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.imageContainer} ${expandedImage === image ? styles.expanded : ''}`}
          onClick={() => handleImageClick(image)}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}

      {expandedImage && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            src={expandedImage}
            alt="Expanded Image"
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
};

export default Achivment;

