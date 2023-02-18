import Navbar from './navbar';
import PageFooter from './footer';
import styles from './styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.global_wrapper}>
        <Navbar />
        <div className={styles.layout}>
          <main className={styles.main}>{children}</main>
          <PageFooter />
        </div>
      </div>
    </>
  );
}
