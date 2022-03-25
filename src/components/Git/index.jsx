import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import pt from "../../../locales/pt";
import en from "../../../locales/en";

import { RepositoryItem } from "./RepositoryItem/RepositoryItem";

import styles from "./styles.module.scss";

export function Git() {
  const [repositories, setRepositories] = useState();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? pt : en;

  useEffect(() => {
    axios.get("https://api.github.com/users/sergiostvs/repos")
      .then((response) => setRepositories(response.data));
  }, []);


  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{t.repositorios}</h3>
      <section className={styles.section}>
        {repositories?.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </section>
    </div>
  );
}

