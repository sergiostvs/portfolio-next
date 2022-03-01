import Link from "next/link";
import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import dtmoney from "../../public/images/dtmoney.png"

import styles from "../styles/dtmoney.module.scss"
import Image from "next/image";

export default function Dtmoney() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <button className={styles.back}>{t.voltar}</button>
      </Link>
      <h1>DT Money</h1>
      <p>{t.dtmoney1}</p>
      <div>
        <Image src={dtmoney}/>
      </div>
    </div>
  );
}
