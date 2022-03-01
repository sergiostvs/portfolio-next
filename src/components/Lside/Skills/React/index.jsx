import Image from "next/image";
import { ProgressBar } from "./ProgressBar";

import styles from "./styles.module.scss";

import Reactlogo from "../../../../../public/images/react.svg";

export function React() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Reactlogo} alt="" />
        </div>
        <h3 className={styles.h3}>React</h3>
        <ProgressBar />
      </div>
    </>
  );
}
