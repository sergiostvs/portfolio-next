import { useRouter } from "next/router";

import pt from "../../../../locales/pt"
import en from "../../../../locales/en"

import { Design } from "./Design";
import { Figma } from "./Figma";
import { GitHub } from "./Git";
import { Html } from "./Html";
import { Javascript } from "./Javascript";
import { Motion } from "./Motion";
import { React } from "./React";

import styles from "./styles.module.scss";


export function Skills() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  return (
    <div className={styles.skillss}>
      <h3>{t.habilidades}</h3>
      <Html />
      <React />
      <Javascript />
      <GitHub />
      <Figma />
      <Design />
      <Motion />
    </div>
  );
}
