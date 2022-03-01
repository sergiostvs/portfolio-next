import { ProgressBar } from "./ProgressBar";
import styles from "./styles.module.scss";

import Htmllogo from "../../../../../public/images/html-css.svg";
import Image from "next/image";

export function Html() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Htmllogo} alt="" />
        </div>
        <h3 className={styles.h3}>HTML / CSS</h3>
        <ProgressBar />
      </div>
    </>
  );
}
