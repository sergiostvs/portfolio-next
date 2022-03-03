import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import canoa from "../../public/images/canoa.png";

import styles from "../styles/projects.module.scss";
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
        <h2>{t.canoat}</h2>
        <p>{t.canoa}</p>
        <a
          className={styles.link}
          href="https://fazenda-canoa.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {t.link}
        </a>
        <div className={styles.img}>
          <Image src={canoa} />
        </div>
      </div>
    </div>
  );
}
