import "./ExampleAdvantages.css";

function ExampleAdvantages(props) {
  return (
    <div className="ExampleAdvantages" style={{ background: props.Background }}>
      <p className="EAText">{props.Text}</p>
      <h2 className="EAH2">{props.Title1}</h2>
      <h3 className="EAH3">{props.Title2}</h3>
      <img src={props.Img} className="EAImg" />
    </div>
  );
}

export default ExampleAdvantages;
