import './ExampleCategory.css';

function ExampleCategory(props) {
  return (
    <div className="ExampleCategory">
            <img src={props.Img}/>
            <p className='ECText'>
                {props.Text}
            </p>
    </div>
  );
}

export default ExampleCategory;