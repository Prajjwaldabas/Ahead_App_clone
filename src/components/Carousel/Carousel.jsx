import './Carousel.css'
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import Image from 'next/image';

import redAhead from '../../assets/redAhead.png'


const Carousel = () => {


const cards=[

    {
        bgColor:"rgb(238,235,254)",
Icon:<InsertEmoticonRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(216,242,255)",
Icon:<SentimentDissatisfiedRoundedIcon/>,
title:"You argue with a collegue",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(213, 231, 194)",
Icon:<SentimentSatisfiedRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(255, 221, 253)",
Icon:<InsertEmoticonRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(238,235,254)",
Icon:<SentimentDissatisfiedRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(242, 199, 204)",
Icon:<SentimentSatisfiedRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(221, 221, 255)",
Icon:<InsertEmoticonRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
    {
        bgColor:"rgb(255, 218, 209)",
Icon:<SentimentDissatisfiedRoundedIcon/>,
title:"You get a promotion at work",
text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos doloribus eius tempore deleniti nihil numquam exercitationem cum quisquam quod.'
    },
]

  return (
    <div className='carousel flex fd-col aic'>

<div className='Sound-familiar flex aic'>
    <h1>Does this sound familiar...</h1>
    <span><Image src={redAhead} style={{height:"100px",width:"100px",borderRadius:"50%"}}></Image></span>
    </div>


 <div className='carouselContainer flex  aic'>
 <div className='cardContainer'>
{cards.map((card,index)=>{
   return   <div className='carouselCard flex fd-col jcc' key={index} style={{backgroundColor:`${card.bgColor}`}}>
<div style={{ color: "gold" }}>
    <span >{card.Icon}</span>
</div>

   <h4>{card.title}</h4>
   <p style={{color:"grey",fontWeight:"500",fontSize:"14px"}}>{card.text}</p>
   
   </div> 

})}
</div>


        </div>

        
    </div>
  )
}

export default Carousel