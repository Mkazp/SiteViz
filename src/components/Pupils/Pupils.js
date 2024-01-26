// Pupils.js
import React, { useState } from 'react';
import styles from './Pupils.module.scss';

const Pupils = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pupilImages = Array.from({ length: 60 }, (_, index) => `thierAch/photo${index + 1}.jpg`);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Достижения и работы моих воспитанников</h1>
      <div className={styles.pupilsContainer}>
        {pupilImages.map((image, index) => (
          <React.Fragment key={index}>
            {(index % 6 === 0 && index !== 0) && <hr className={styles.separator} />}
            <img
              src={image}
              alt={`photo ${index + 1}`}
              className={styles.pupilImage}
              onClick={() => handleImageClick(image)}
            />
          </React.Fragment>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={handleClose}>
          <img
            src={selectedImage}
            alt="Expanded Image"
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
};

export default Pupils;
