import { useRouter } from "next/router";

import pt from "../../../../locales/pt";
import en from "../../../../locales/en";

import styles from "./styles.module.scss";

export default function Portfolio() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.content}>
      <section>
        <p>{t.portfolio1}<br/>{t.portfolio2}<br/>{t.portfolio3}</p>
      </section>
    </div>
  );
}
