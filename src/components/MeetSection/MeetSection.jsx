import './MeetSection.css'
import Image from 'next/image'
import aheadpurple from '../../assets/aheadpurple.svg'
import flower from '../../assets/flower.png'
import Leaves from '../../assets/aheadLeave.png'
import Flower2 from '../../assets/Flower2.png'

const MeetSection = () => {
  return (
    <div className='MeetSection flex aic '>

        <div className='flower'><Image src={flower} style={{height:"150px",width:"200px"}}></Image></div>
<div className='Leaves'><Image src={Leaves} style={{height:"35px",width:"150px"}}></Image></div>
<div className='Meetleft flex fd-col '>

<p>Built out of frustation</p>

<h1>Meet the ahead app</h1>


<div className='greyCircle flex jcc aic'>

<div className='flower2'><Image src={Flower2} style={{height:"50px" , width:'80px'}} ></Image></div>
<div className='whiteCircle flex jcc aic'>
    <Image src={aheadpurple} style={{height:"210px"}}></Image>
</div>
</div>


<div className='creamCircle'>

</div>

<div id='Leave2'><Image src={Leaves} style={{height:"35px",width:"150px"}}></Image></div>
<div className='outerRedCircle flex jcc aic'>
    <div className='redCircle'>

    </div>
</div>
<div className='pinkCircle'>
    

</div>
</div>


<div className='meetRight flex fd-col'>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium  sit amet consectetur adipisicing elit. Alias accusantium.</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
</div>




    </div>
  )
}

export default MeetSection