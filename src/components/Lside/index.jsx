import { Perfil } from "./Perfil";
import { Skills } from "./Skills";
import { Social } from "./Social";

import styles from "./styles.module.scss"

export function Lside() {
    return(
        <div className={styles.container}>
            <Perfil/>
            <Social/>
            <section/>
            <Skills/>
        </div>
    )
}