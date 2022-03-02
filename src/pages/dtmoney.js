import Link from "next/link";
import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import dtmoney from "../../public/images/dtmoney.png";

import styles from "../styles/dtmoney.module.scss";
import Image from "next/image";

export default function Dtmoney() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <button
          className={styles.back}
          onClick={() =>
            router.push(
              {
                pathname: "/",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          {t.voltar}
        </button>
        <h2>DT Money</h2>
        <p>{t.dtmoney1}</p>
        <div>
          <Image src={dtmoney} />
        </div>
      </div>
    </div>
  );
}
