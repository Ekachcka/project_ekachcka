import './IconsHead.css';

function IconsHead(props) {
  return (
    <button className="IconsHead">
      <img src={props.Icon}/>
    </button>
  );
}

export default IconsHead;