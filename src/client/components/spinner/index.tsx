import styles from './spinner.module.scss';
export const Spinner = () => (
  <div role="alert" aria-busy="true" className={styles['loader-container']}>
    <div className={styles.loader}></div>
  </div>
);
