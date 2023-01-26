import ExampleAdvantages from "../ExampleAdvantages";
import "./BigAdvantages2.css";
import Advantages6 from "../../Image/Advantages6.png";
import Advantages7 from "../../Image/Advantages7.png";

function BigAdvantages2() {
  return (
    <div className="BigAdvantages">
      <ExampleAdvantages
        Text={"Watches"}
        Title1={"Keep moving."}
        Title2={"Keep improving."}
        Img={Advantages6}
        Background={"#F3F2F1"}
      />
      <ExampleAdvantages
        Text={"Earbuds"}
        Title1={"Great sound."}
        Title2={"All around."}
        Img={Advantages7}
        Background={"#E7EBEE"}
      />
    </div>
  );
}

export default BigAdvantages2;
