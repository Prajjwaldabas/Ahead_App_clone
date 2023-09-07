import Image from "next/image";
import appStore from '../../assets/appStore.png'
import './Hero.css'
import Mobile from '../../assets/mobile.png'
import StarIcon from '@mui/icons-material/Star';
import card1 from '../../assets/aheadCard1.png'
import card2 from '../../assets/aheadCard2.png'
import aheadBlue from '../../assets/aheadBlue.svg'
import aheadpurple from '../../assets/aheadpurple.svg'
import aheaYellow from '../../assets/aheaYellow.svg'
import aheadRed from '../../assets/aheadRed.svg'
import aheadBrown from '../../assets/aheadBrown.jpg'


const Hero = () => {
  return (
    <div id="hero">

<div id='heroLeft'>

<p>Ahead app</p>

<h1 style={{fontSize:"80px"}}>Master your life <br /> by mastering <br />
emotions</h1>

<div className='flex aic'>

<div  className="jcc aic flex">
    <Image src={appStore} className="appStoreImg"></Image>
    </div>

    <div className=''>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>

    <div>
        <p>100+ AppStore reviews</p>
    </div>
    </div>

</div>

</div>


<div className="heroRight">

  <div className="outerCircle">

<Image src={aheadRed} className="aheadIcons" id='iconBlue'></Image>
<Image src={aheadpurple} className="aheadIcons" id="iconPurple"></Image>
<Image src={aheaYellow} className="aheadIcons" id='iconYellow'></Image>



<div className="innerCircle flex jcc aic">
<Image src={card2}className="cardMobile" />
<Image src={card1} className="cardMobile" id='card1'/>

<Image src={Mobile} className="MobileImg"></Image>



</div>
  </div>

</div>

    </div>
  )
}

export default Hero;