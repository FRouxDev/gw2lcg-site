import Link from 'next/link';
import styles from './styles/navbar.module.css';

export default function Navbar() {
  return (
    <>
      <div className={styles.navwrapper}>
        <div className={styles.navmenu}>
          <div className={styles.menu_item}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.menu_item}>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className={styles.menu_item}>
            <Link href="/cards">Cartes</Link>
          </div>
          <div className={styles.menu_item}>
            <Link href="/sets">Extensions</Link>
          </div>
        </div>
      </div>
    </>
  );
}
