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
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/todo",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          to.do
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/fazenda-canoa",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          {t.canoat}
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/nitro-agency",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          Nitro Agency
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/imobiliaria",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          {t.imob}
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/cardapio-digital",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          {t.burgers}
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/weather-app",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          {t.weather}
        </button>
        <button
          className={styles.link}
          onClick={() =>
            router.push(
              {
                pathname: "/pokedex",
              },
              undefined,
              { scroll: false }
            )
          }
        >
          Pokedex
        </button>
      </nav>
    </div>
  );
}
