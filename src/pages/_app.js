import { Cursos } from "../components/Cursos";
import { Formacao } from "../components/Formacao";
import { Git } from "../components/Git";
import { Lside } from "../components/Lside";
import Projetos from "../components/Projetos";
import "../styles/global.scss";
import styles from "../styles/home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Lside />
      <div className={styles.content1}>
        <Formacao />
        <div className={styles.content2}>
          <Git />
          <Cursos />
        </div>
        <div className={styles.content3}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
