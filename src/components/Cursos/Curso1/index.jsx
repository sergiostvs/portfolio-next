import { useRouter } from "next/router";

import pt from "../../../../locales/pt"
import en from "../../../../locales/en"

import styles from "../styles.module.scss";

export function Curso1() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.content}>
      <h3>Scrum Fundamentals Certified</h3>
      <p>Scrum Study</p>
      <p>ID: 843025</p>
      <p>{t.emissao} 06/05/2021</p>
    </div>
  );
}
