import ButtonHead from '../ButtonHead';
import IconsHead from '../IconsHead';
import './Head.css';
import Search from '../../icons/Search.svg';
import Question from '../../icons/Question.svg';
import Basket from '../../icons/Basket.svg';
import Account from '../../icons/Account.svg';
import Google from '../../icons/Google.svg';
function Head() {
  return (
    <div className="Head">
        <div className='ButtonsFHead'>
            <IconsHead Icon={Google}/>
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
          <IconsHead Icon={Search}/>
          <IconsHead Icon={Question}/>
          <IconsHead Icon={Basket}/>
          <IconsHead Icon={Account}/>
        </div>
    </div>
  );
}

export default Head;