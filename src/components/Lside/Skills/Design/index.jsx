import { ProgressBar } from "./ProgressBar";
import styles from "./styles.module.scss";

import Designlogo from "../../../../../public/images/design.svg";
import Image from "next/image";

export function Design() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Designlogo} alt="" />
        </div>
        <h3 className={styles.h3}>Design</h3>
        <ProgressBar />
      </div>
    </>
  );
}
