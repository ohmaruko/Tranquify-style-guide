import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const router = useRouter();
    const [active, setActive] = useState(false);

    return (
        <header className={styles.headerContainer}>
            {/* <div className={styles.logoContainer}>
                <Image src='/images/logo-48px.svg' alt='logo' width={60} height={60} />
                <Image src='/images/Tranquify-logo-text.svg' alt='tranquify' width={90} height={90} />
            </div> */}
             <Link href="/">
                <div className={styles.logoContainer}>
                    <Image src='/images/logo-48px.svg' alt='logo' width={60} height={60} />
                    <Image src='/images/Tranquify-logo-text.svg' alt='tranquify' width={90} height={90} />
                </div>
            </Link>

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

