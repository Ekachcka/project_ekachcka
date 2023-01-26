import './Media.css';

function Media(props) {
  return (
    <div className="Media" style={{ background: props.Background }}>
            <img src={props.Img} className='MediaImg'/>
        <div className='MediaText'>
            <h2 className='MTH2'>
                {props.Title}
                
            </h2>
            <p className='MTText'>
              {props.Text}
             
            </p>
        </div>
    </div>
  );
}

export default Media;