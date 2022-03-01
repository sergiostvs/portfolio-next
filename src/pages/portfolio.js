import Link from "next/link";
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
      <Link href="/">
        <button className={styles.back}>{t.voltar}</button>
      </Link>
      <h2>Portfolio</h2>
      <p>{t.portfolio1}</p>
    </div>
  );
}
