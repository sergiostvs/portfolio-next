import { ProgressBar } from "./ProgressBar";

import styles from "./styles.module.scss";

import Javascriptlogo from "../../../../../public/images/javascript.svg";
import Image from "next/image";

export function Javascript() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Javascriptlogo} alt="" />
        </div>
        <h3 className={styles.h3}>Javascript</h3>
        <ProgressBar />
      </div>
    </>
  );
}
