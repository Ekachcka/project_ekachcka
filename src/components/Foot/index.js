import ButtonFoot from '../ButtonF';
import IconsFoot from '../IconsF';
import './Foot.css';
import America from '../../icons/America.svg';
import Twitter from '../../icons/Twitter.svg';
import Inst from '../../icons/Inst.svg';
import Facebook from '../../icons/Facebook.svg';
import YouTube from '../../icons/YouTube.svg';
import TikTok from '../../icons/TikTok.svg';
function Foot() {
  return (
    <div className="Foot">
         <div className='IconsFFoot'>
          <IconsFoot Icon={Twitter}/>
          <IconsFoot Icon={Inst}/>
          <IconsFoot Icon={Facebook}/>
          <IconsFoot Icon={YouTube}/>
          <IconsFoot Icon={TikTok}/>
        </div>
        <div className='ButtonsFFoot'>
            <IconsFoot Icon={America}/>
            <ButtonFoot ButtonText={"United States"}/>
            <ButtonFoot ButtonText={"Privacy"}/>
            <ButtonFoot ButtonText={"Google Nest Commitment to Privacy"}/>
            <ButtonFoot ButtonText={"Sales Terms"}/>
            <ButtonFoot ButtonText={"Terms of Service"}/>
            <ButtonFoot ButtonText={"Careers"}/>
        </div>
    </div>
  );
}

export default Foot;