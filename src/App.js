import React, { useRef, useState } from 'react';

const ImageGallery = () => {
  const imageRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <img ref={imageRef} src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6549d388ead1b63926277753_6549d44c59a57368a4815699/scale_1200" alt="Downloaded Image" style={{ display: isHidden ? 'none' : 'block' }} />
      <button onClick={toggleVisibility}>Скрыть</button>
    </div>
  );
};

export default ImageGallery;