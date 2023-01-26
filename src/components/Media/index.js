import './Media.css';
import MediaImg from '../../Image/MediaImg.png';
function Media() {
  return (
    <div className="Media">
            <img src={MediaImg} className='MediaImg'/>
        <div className='MediaText'>
            <h2 className='MTH2'>
                This holiday season, Google Pixel is giving back.
            </h2>
            <p className='MTText'>
                We're contributing $1 million to the NBA Foundation to help advance HBCU students in their careers across STEM, sports, and media industries.
            </p>
        </div>
    </div>
  );
}

export default Media;