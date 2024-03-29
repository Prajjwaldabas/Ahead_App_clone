'use client';
import Navbar from "../components/Navbar/Navbar"
import Hero from '../components/Hero/Hero'
import Carousel from '../components/Carousel/Carousel'
import IQ_section from '../components/IQ_section/IQ_section'
import MeetSection from '../components/MeetSection/MeetSection'
import dynamic from 'next/dynamic';

const Main = () => {


    const DynamicHero = dynamic(() => import('../components/Hero/Hero'), {
        ssr: false, // Disable server-side rendering for Hero component
      });


    return <div id="App">

        <Navbar/>
        <Hero/>
        <IQ_section/>
       <Carousel/>
       <MeetSection/>
        </div>

}

export default Main