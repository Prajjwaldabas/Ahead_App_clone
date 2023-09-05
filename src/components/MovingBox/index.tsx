import { gsap } from "gsap"
import { useEffect } from "react"
import styles from './movingBox.module.css'

const MovingBox = () => {

    useEffect( () => {

        setTimeout(() => {

            gsap.fromTo(".box", { x: -40, fill: 'blue', }, { x: 40, fill: 'green' })

        }, 4000)

    }, [])

    return <div style={{ height: 100, width: 100, backgroundColor: 'aquamarine' }} className="box"  >

    </div>

}

export default MovingBox