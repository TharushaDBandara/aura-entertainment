import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
            <div className={styles.text}>Loading මේඝ වර්ෂා...</div>
        </div>
    );
}
