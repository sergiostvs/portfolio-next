import GitHub from "../../../../public/images/github.svg";
import Linkedin from "../../../../public/images/linkedin.svg";
import Email from "../../../../public/images/email.svg";

import styles from "./styles.module.scss";
import Image from "next/image";

export function Social() {
  return (
    <div className={styles.socials}>
      <a
        className={styles.link}
        target="_blank"
        href="https://www.linkedin.com/in/sergiostvs/"
        rel="noreferrer"
      >
        <div className={styles.img}>
          <Image src={Linkedin} alt="Linkedin" />
        </div>
      </a>
      <a
        className={styles.link}
        target="_blank"
        href="https://github.com/sergiostvs"
        rel="noreferrer"
      >
        <div className={styles.img}>
          <Image src={GitHub} alt="Github" />
        </div>
      </a>
      <a
        className={styles.link}
        target="_blank"
        href="mailto: sergiohme@gmail.com"
        rel="noreferrer"
      >
        <div className={styles.img}>
          <Image src={Email} alt="Email" />
        </div>
      </a>
    </div>
  );
}
