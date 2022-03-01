import styles from "./styles.module.scss";

export function RepositoryItem(props) {
  return (
    <a
      className={styles.content}
      href={props.repository.html_url}
      target="_blank"
    >
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
    </a>
  );
}
