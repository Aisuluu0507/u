
import React, { useRef, useState } from 'react';

const Photo = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const toggleImage = () => {
    if (imageRef.current) {
      setIsVisible(!isVisible);
      imageRef.current.style.display = isVisible ? 'none' : 'block';
    }
  };

  return (
    <div>
      <button className='button' onClick={toggleImage}>
        {isVisible ? 'Скрыть изображение' : 'Показать изображение'}
      </button>
      <img
        ref={imageRef}
        src="https://masterpiecer-images.s3.yandex.net/8d29410a3c4511ee94523a06614cf266:upscaled"
        alt="Placeholder"
        style={{ display: isVisible ? 'block' : 'none' }}
      />
    </div>
  );
};

export default Photo;