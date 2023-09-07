import './navbar.css'
import Image from 'next/image'
import logo from '../../assets/aheadLogo.jpg'
const Navbar = () => {
  return (
    <div className='flex aic jcsb w-100 navbar'>
     
<div >
<Image src={logo} className="logo"/>
</div>


<ul className='navCenterItems flex jcsb'>
  <li>Emotions</li>
  <li>Manifesto</li>
  <li>Self-awareness test</li>
  <li>Work With Us</li>
</ul>


<button className='download_Btn'>Download app</button>

    </div>
  )
}

export default Navbar;