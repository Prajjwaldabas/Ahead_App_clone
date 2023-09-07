import Image from "next/image";
import appStore from '../../assets/appStore.png'
const Hero = () => {
  return (
    <div classname="heroContainer">

<div classname='heroLeft'>

<p>Ahead app</p>

<h1>Master your life by mastering emotions</h1>

<div>

    <Image src={appStore} className="appStoreImg"></Image>

</div>

</div>

    </div>
  )
}

export default Hero;