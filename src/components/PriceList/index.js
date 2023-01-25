import PriceListPrice from '../PriceListPrice';
import './PriceList.css';
import Price1 from '../../Image/Price1.png';
import Price2 from '../../Image/Price2.png';
import Price3 from '../../Image/Price3.png';
import Price4 from '../../Image/Price4.png';
import Price5 from '../../Image/Price5.png';
function PriceList() {
  return (
    <div className="PriceList">
        <p className="PriceListText">
            Sneak a peek. For you or for them.
        </p>
        <div className="PriceListList">
            <PriceListPrice Price={Price1} Text={"Google Pixel Watch"}/>
            <PriceListPrice Price={Price2} Text={"Pixel 7 Pro"}/>
            <PriceListPrice Price={Price3} Text={"Pixel 7"}/>
            <PriceListPrice Price={Price4} Text={"Pixel Buds Pro"}/>
            <PriceListPrice Price={Price5} Text={"Nest Doorbells"}/>
        </div>
    </div>
  );
}

export default PriceList;