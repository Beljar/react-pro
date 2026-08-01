import styles from './styles.module.scss';

export const PublicPage = () => {
  return (
    <div className={styles.container}>
      <h1>Это публичная страница</h1>
      <span>Она видна всем</span>
    </div>
  );
};
