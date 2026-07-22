import styles from './styles.module.scss';

export const PageLayout = ({
  children,
  Header,
}: {
  children: React.ReactNode;
  Header: React.ReactNode;
}) => {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.header}>{Header}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
