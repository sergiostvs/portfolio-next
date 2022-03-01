import { useRouter } from "next/router";

import pt from "../../../locales/pt"
import en from "../../../locales/en"

import styles from "./styles.module.scss";
import { Curso1 } from "./Curso1";
import { Curso2 } from "./Curso2";
import { Curso3 } from "./Curso3";

export function Cursos() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.container}>
      <h3>{t.cursos}</h3>
      <section>
        <Curso1/>
        <Curso2/>
        <Curso3/>
      </section>
    </div>
  );
}
