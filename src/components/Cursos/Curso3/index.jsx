import { useRouter } from "next/router";

import pt from "../../../../locales/pt"
import en from "../../../../locales/en"

import styles from "../styles.module.scss";

export function Curso3() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;
  
  return (
    <div className={styles.content}>
      <h3>{t.curso3}</h3>
      <p>Udemy | Cod3r</p>
      <p>{t.cargah} 97h</p>
      <p>{t.emissao} 20/10/2021</p>
    </div>
  );
}
