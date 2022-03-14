import { useRouter } from "next/router";

import pt from "../../../../locales/pt"
import en from "../../../../locales/en"

import styles from "../styles.module.scss";

export function Curso4() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;
  
  return (
    <div className={styles.content}>
      <h3>Ingnite ReactJS</h3>
      <p>Rocketseat</p>
      <p>{t.emissao} 20/01/2022</p>
    </div>
  );
}
