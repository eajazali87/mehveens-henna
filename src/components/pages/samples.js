import React from 'react';
import { Gallery, Image, Overlay } from 'react-stylish-gallery'
//import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

const samples = () => {
 
    return (
      <div className="container-fluid">
      <h1>samples</h1>
      <p>Some of our work...</p>
      <Gallery withModal>
   <Image src="/Users/umahaea/Documents/workspace/mehveens-henna/src/Assets/images/Mehendi-Designs-1.jpg" alt="Image 1" size ="3" theme={{ padding: '5px' }}>
      <Overlay title="My first image" animationDuration="0.1"/>
   </Image>
    

  <Image src="https://upload.wikimedia.org/wikipedia/commons/4/49/Testing22222.jpg" alt="Image 2" size ="3">
    <Overlay title="My second image"/>
    </Image>
    </Gallery>      
      </div>
    );
}
export default samples;