import { useRouter } from "next/router";

import pt from "../../locales/pt";
import en from "../../locales/en";

import todo from "../../public/images/todo.png";

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
        <h2>to.do</h2>
        <p>{t.todo}</p>
        <a
          className={styles.link}
          href="https://to-do-challenger.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {t.link}
        </a>
        <div className={styles.img}>
          <Image src={todo} />
        </div>
      </div>
    </div>
  );
}
