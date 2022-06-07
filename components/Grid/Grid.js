import styles from "./Grid.module.scss";

export const GridContainer = ({ children, rowReverse }) => {
  if (rowReverse) {
    return (
      <div
        className={`${styles.grid_container}`}
        style={{ flexDirection: "row-reverse" }}
      >
        {children}
      </div>
    );
  } else {
    return <div className={`${styles.grid_container}`}>{children}</div>;
  }
};
export const GridItem = ({ children, size }) => {
  if (size == 6) {
    return <section className={styles.grid_6}>{children}</section>;
  } else if (size === 4) {
    return <section className={styles.grid_4}>{children}</section>;
  } else if (size === 5) {
    return <section className={styles.grid_5}>{children}</section>;
  } else if (size === 7) {
    return <section className={styles.grid_7}>{children}</section>;
  }
};
