import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

const samples = () => {
  const sampleImages=[
    {original: "https://image.ibb.co/mCZdnw/Mehendi_Designs_1.jpg", sizes: "10vw"},
    {original: "https://image.ibb.co/mCZdnw/Mehendi_Designs_1.jpg"},
]
    return (
      <div className="container-fluid">
      <h1>samples</h1>
      <p>Some of our work...</p>
      <ImageGallery items={sampleImages}/>
      </div>
    );
}
export default samples;
