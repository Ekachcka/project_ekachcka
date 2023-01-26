import ExampleAdvantages from "../ExampleAdvantages";
import "./BigAdvantages.css";
import Advantages4 from "../../Image/Advantages4.png";
import Advantages5 from "../../Image/Advantages5.png";

function BigAdvantages() {
  return (
    <div className="BigAdvantages">
      <ExampleAdvantages
        Text={"Pixel Pass"}
        Title1={"One price for"}
        Title2={"all things Pixel."}
        Img={Advantages4}
        Background={"#D6E2DB"}
      />
      <ExampleAdvantages
        Text={"Google Pixel Watch"}
        Title1={"Help by Google."}
        Title2={"Health by Fitbit."}
        Img={Advantages5}
        Background={"#E9E3DB"}
      />
    </div>
  );
}

export default BigAdvantages;
