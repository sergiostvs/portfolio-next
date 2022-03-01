import { ProgressBar } from "./ProgressBar";

import styles from "./styles.module.scss";

import Figmalogo from "../../../../../public/images/figma.svg";
import Image from "next/image";

export function Figma() {
  return (
    <>
      <div className={styles.progress}>
        <div className={styles.img}>
          <Image src={Figmalogo} alt="" />
        </div>
        <h3 className={styles.h3}>Figma / XD</h3>
        <ProgressBar />
      </div>
    </>
  );
}
