import { useRouter } from "next/router";

import Image from "next/image";
import fotoPerfil from "../../../../public/images/perfil.png";

import styles from "./styles.module.scss";

import en from "../../../../locales/en";
import pt from "../../../../locales/pt";

export function Perfil() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  const changeLanguagePT = () => {
    const locale = "pt";
    router.push(router.pathname, router.asPath, { locale });
  };

  const changeLanguageEN = () => {
    const locale = "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className={styles.perfils}>
      <div className={styles.btn}>
        <button
          className={locale === "en" ? styles.activeLink : ""}
          onClick={changeLanguageEN}
        >
          EN
        </button>
        <button
          className={locale === "pt" ? styles.activeLink : ""}
          onClick={changeLanguagePT}
        >
          PT
        </button>
      </div>
      <Image src={fotoPerfil} alt="" />
      <h1>Sérgio Henrique</h1>
      <p>25</p>
    </div>
  );
}
