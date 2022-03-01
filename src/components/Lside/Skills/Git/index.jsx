import { ProgressBar } from "./ProgressBar";

import styles from "./styles.module.scss";

import Gitlogo from "../../../../../public/images/github.svg";
import Image from "next/image";

export function GitHub() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Gitlogo} alt="" />
        </div>
        <h3 className={styles.h3}>Git / GitHub</h3>
        <ProgressBar />
      </div>
    </>
  );
}
