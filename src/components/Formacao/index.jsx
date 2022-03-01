import { useRouter } from "next/router";

import pt from "../../../locales/pt"
import en from "../../../locales/en"

import styles from "./styles.module.scss";

export function Formacao() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "pt" ? pt : en;

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>{t.formacao}</h2>
                <h2>{t.curso}</h2>
            </div>
            <div className={styles.content2}>
                <h2>Stack:</h2>
                <h2>Front-End, Designer</h2>
            </div>
        </div>
    )
}