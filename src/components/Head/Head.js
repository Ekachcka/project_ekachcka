import ButtonHead from '../ButtonHead/ButtonHead';
import './Head.css';

function Head() {
  return (
    <div className="Head">
        <div className='ButtonsFHead'>
            <ButtonHead ButtonText={"Phones"}/>
            <ButtonHead ButtonText={"Earbuds"}/>
            <ButtonHead ButtonText={"Watches"}/>
            <ButtonHead ButtonText={"Smart Home"}/>
            <ButtonHead ButtonText={"Laptops"}/>
            <ButtonHead ButtonText={"Accessories"}/>
            <ButtonHead ButtonText={"Subscriptions"}/>
            <ButtonHead ButtonText={"Offers"}/>
        </div>
        <div className='IconsFHead'>
        <ButtonHead ButtonText={"vgh"}/>
            <ButtonHead ButtonText={"vb"}/>
        </div>
    </div>
  );
}

export default Head;