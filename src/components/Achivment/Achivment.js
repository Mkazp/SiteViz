import React, { useState } from 'react';
import styles from './Achivment.module.scss';
import { Container } from '@mui/material';

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
            srcSet={`${image} 1600w, ${image.replace('.jpg', '_1000x600.jpg')} 1000w`}
            sizes=""
            src={image}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}

      {expandedImage && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            srcSet={`${expandedImage} 1600w, ${expandedImage.replace('.jpg', '_1000x600.jpg')} 1000w`}
            sizes="(max-width: 1600px) 100vw, 1600px"
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
