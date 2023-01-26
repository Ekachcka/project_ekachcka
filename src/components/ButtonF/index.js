import './ButtonHead.css';

function ButtonHead(props) {
  return (
    <button className="ButtonHead">
        <p className='BHText'>
            {props.ButtonText}
        </p>
    </button>
  );
}

export default ButtonHead;