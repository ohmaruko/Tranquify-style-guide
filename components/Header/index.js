import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
    const [active, setActive] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>Logo here</div>
            <div className={styles.menuContainer}>
                <Link href='/logo'><div className={router.pathname === '/logo' ? styles.active : styles.link}>Logo</div> </Link>

                <Link href='/graphics'><div className={router.pathname === '/graphics' ? styles.active : styles.link}>Graphics</div> </Link>

                <Link href='/colours'><div className={router.pathname === '/colours' ? styles.active : styles.link}>Colours</div></Link>

                <Link href='/typography'><div className={router.pathname === '/typography' ? styles.active : styles.link}>Typography</div></Link>

                <Link href='/references'><div className={router.pathname === '/references' ? styles.active : styles.link}>References</div></Link>
            </div>

        </header>
    )
}

