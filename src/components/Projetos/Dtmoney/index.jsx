import { useRouter } from "next/router";

import pt from "../../../../locales/pt";
import en from "../../../../locales/en";

import styles from "./styles.module.scss";

export default function Dtmoney() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "pt" ? pt : en;

    return(
        <div className={styles.container}>
            <h3>DT Money</h3>
            <p>{t.dtmoney1}</p>
        </div>
    );
}