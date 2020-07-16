import styles from './Header.module.scss';
import Link from 'next/link'
export default function Header() {
    return (
        <header className="py-20">
            <nav className="w-1/2">
                <p>
                    <span className="inline-block font-bold text-4xl mr-6">
                        Liu Qing
                    </span>
                    <img className="inline-block w-16 h-16 rounded-full shadow-xl" src="/assets/avatar.png" alt="avatar"/>
                </p>
                <p className={`${styles['header--description']} mt-6`}>
                    Data Visualization & Full-stack programmer @ finance firm, Blogger, Cat lover, Lifelong learner.
                </p>
                <p className="mt-6">
                    <Link href="/">
                        <a className={styles['header--navlink']}>
                            Blog
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={styles['header--navlink']}>
                            Vlog
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={styles['header--navlink']}>
                            About
                        </a>
                    </Link>
                </p>
                <p></p>
            </nav>
        </header>
    );
}