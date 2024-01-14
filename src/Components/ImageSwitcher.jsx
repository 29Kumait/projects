
// ImageSwitcher.jsx
import fly from '../assets/fly.svg';
import fly4 from '../assets/fly4.svg';
import fly6 from '../assets/fly6.svg';


function ImageSwitcher({ currentImageIndex, stylexProps }) {
    const flyImages = [fly, fly4, fly6];
    return (
        <img src={flyImages[currentImageIndex]} {...stylexProps} alt="logo fly" />
    );
}

export default ImageSwitcher;






