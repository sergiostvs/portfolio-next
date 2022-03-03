import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import nitro from "../../public/images/nitro.png";

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
        <h2>Nitro Agency</h2>
        <p>{t.nitro}</p>
        <a
          className={styles.link}
          href="https://nitro-agency.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          {t.link}
        </a>
        <div className={styles.img}>
          <Image src={nitro} />
        </div>
      </div>
    </div>
  );
}
