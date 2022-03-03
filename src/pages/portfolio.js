import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import styles from "../styles/portfolio.module.scss";

export default function Portfolio() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.container}>
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
      <h2>Portfolio</h2>
      <p>{t.portfolio1}</p>
    </div>
  );
}
