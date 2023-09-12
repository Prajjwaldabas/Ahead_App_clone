import Image from "next/image";
import appStore from '../../assets/appStore.png'
import './Hero.css'
import Mobile from '../../assets/mobile.png'
import StarIcon from '@mui/icons-material/Star';
import card1 from '../../assets/aheadCard1.png'
import card2 from '../../assets/aheadCard2.png'

import aheadpurple from '../../assets/purpleAhead.png'
import aheaYellow from '../../assets/yellowAhead.png'
import aheadRed from '../../assets/redAhead.png'
import Leave from '../../assets/aheadLeave.png'
import { motion } from "framer-motion"

const Hero = () => {


  



  return (
    <div id="hero">

<div id='heroLeft'


>

<motion.div style={{width:"230px",height:"50px",position:"absolute",top:"-18px",transform:"rotate(-45deg)"}} 
   
   animate={{ rotate: 400 }} 
   
    transition={{ duration: 2, loop: Infinity, ease: "linear" }}
   
>
  <Image src={Leave} style={{width:"230px",height:"50px"}}
 
  
  ></Image>

</motion.div>


  <motion.div      initial={{ x: "-120%" }} 
     animate={{ x: 0 }}
     transition={{ type: "spring", damping: 10, stiffness: 100 }} >
  <p>Ahead app</p>

<h1 style={{fontSize:"80px",lineHeight:"90px"}}>Master your life <br /> by mastering <br />
emotions</h1>
  </motion.div>



<div className='flex aic'>

<div  className="jcc aic flex">
    <Image src={appStore} className="appStoreImg"></Image>
    </div>

    <motion.div className='' 
    
    initial={{ x: "-120%" ,scale:0}} 
    animate={{ x: 0 ,scale:1}}
    transition={{ type: "spring", damping: 10, stiffness: 100 }}>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>
    <StarIcon className="star"/>

    <div 
>
        <p>100+ AppStore reviews</p>
    </div>
    </motion.div>

</div>

</div>


<div className="heroRight">

  <motion.div className="outerCircle"
    initial={{ scale: 0 }}
 animate={{ rotate: -360 ,scale: 1 }} // Apply a 360-degree rotation animation
 transition={{
  ease: "linear",
  duration: 0.8,
  
}}
  
  
  >

<Image src={aheadRed} className="aheadIcons" id='iconBlue' style={{width:"100px"}}></Image>
<Image src={aheadpurple} className="aheadIcons" id="iconPurple" style={{width:"250px",height:"120px"}}></Image>
<Image src={aheaYellow} className="aheadIcons" id='iconYellow' style={{width:"250px",height:"120px"}}></Image>
</motion.div>


<motion.div className="innerCircle flex jcc aic"
   initial={{ scale: 0 ,rotate:-45}}
   animate={{ scale: 1 ,rotate:0}} 
   transition={{ ease: "linear", duration: 0.5 }}


>
  
  <motion.div
  className="cardMobile"
   initial={{ scale: 0}}
   animate={{ scale: 1 }} 
   transition={{ ease: "linear", duration: 0.5 ,delay:0.2}}
   
  >
    
<Image src={card1} className="cardMobile" id='card1'/>

  </motion.div>

  <Image src={card2}className="cardMobile" />
<Image src={Mobile} className="MobileImg"></Image>



</motion.div>
 

</div>

    </div>
  )
}

export default Hero;