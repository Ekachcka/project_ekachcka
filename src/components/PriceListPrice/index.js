import "./PriceListPrice.css";
function PriceListPrice(props) {
  return (
    <div className="PriceListPrice">
      <div className="PriceListPriceImg">
        <img src={props.Price} />
      </div>
      <p className="PTPText">{props.Text}</p>
    </div>
  );
}

export default PriceListPrice;
