import { Paper } from "@mui/material"
import styles from './navbar.module.css'

const Navbar = () => {
    return <div>
        <Paper
            className={styles.paper}
            elevation={3}>

                <div>
                    Meet the ahead app
                </div>

                <div>
                    Think it as of a pocket.
                </div>

            </Paper>
    </div>
}

export default Navbar