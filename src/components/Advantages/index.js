import ExampleAdvantages from "../ExampleAdvantages";
import "./Advantages.css";
import Advantages1 from "../../Image/Advantages1.png";
import Advantages2 from "../../Image/Advantages2.png";
import Advantages3 from "../../Image/Advantages3.png";

function Advantages() {
  return (
    <div className="Advantages">
      <ExampleAdvantages
        Text={"Google Pixel Watch"}
        Title1={"Help by Google."}
        Title2={"Health by Fitbit."}
        Img={Advantages1}
        Background={"#E9E3DB"}
      />
      <ExampleAdvantages
        Text={"Nest Wifi Pro with Wi-Fi 6E"}
        Title1={"The better way"}
        Title2={"to Wi-Fi."}
        Img={Advantages2}
        Background={"#E9E3DB"}
      />
      <ExampleAdvantages
        Text={"Nest Doorbell (wired)"}
        Title1={"Know more."}
        Title2={"No charging."}
        Img={Advantages3}
        Background={"#E9E3DB"}
      />
    </div>
  );
}

export default Advantages;
