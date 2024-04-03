import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>Logo here</div>
            <div className={styles.menuContainer}>
                <Link href='/logo'>Logo</Link>
                <Link href='/graphics'>Graphics</Link>
                <Link href='/colours'>Colours</Link>
                <Link href='/typography'>Typography</Link>
                <Link href='/references'>References</Link>
            </div>
        </header>
    )
}