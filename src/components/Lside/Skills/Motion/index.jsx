import { ProgressBar } from "./ProgressBar";
import Image from "next/image";

import styles from "./styles.module.scss";

import Motionlogo from "../../../../../public/images/motion.svg"

export function Motion() {
    return(
        <>
            <div className={styles.progress}>
                <div className={styles.img}>
                <Image src={Motionlogo} alt="" />
                </div>
                <h3 className={styles.h3}>Motion</h3>
                <ProgressBar/>
            </div>
        </>
    )
}