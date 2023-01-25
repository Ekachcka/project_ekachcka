import './HeadImage.css';
import HeadImg from '../../Image/HeadImage.png';

function HeadImage() {
  return (
    <div className="HeadImage">
        <img src={HeadImg} className="HeadImageBackground" />
        <h1 className="HeadImageH1">
            Inhale. Gift⁠. Exhale.
        </h1>
        <p className="HeadImageText">
            The gifts you need, stress-free. Shop the best of Google with ease.
        </p>
        <div className='HeadImageButtonText'>
            <button className='HIButton'>
                Browse deals
            </button>
            <p className='HIBText'>
                Browse the gift guide
            </p>
        </div>
    </div>
  );
}

export default HeadImage;