import { useRouter } from "next/router";

import pt from "../../../locales/pt";
import en from "../../../locales/en";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function Projetos() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.container}>
      <h3>{t.projetos}</h3>
      <nav className={styles.menu}>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/portfolio",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          Portfolio
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/dtmoney",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          DT Money
        </button>
      </nav>
    </div>
  );
}
