import { useRouter } from "next/router";

import pt from "../../../../locales/pt"
import en from "../../../../locales/en"

import styles from "../styles.module.scss";

export function Curso2() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.content}>
      <h3>Introduction to Cloud Development with HTML, CSS, and JavaScript</h3>
      <p>IBM</p>
      <p>{t.emissao} 22/10/2021</p>
    </div>
  );
}
