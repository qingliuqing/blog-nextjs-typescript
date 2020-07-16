import styles from './PostList.module.scss';
import Link from 'next/link'
export default function PostList() {
    return (
            <div className="flex-0.8 bg-white p-8 shadow-lg">
                <ul>
                    <li className={`${styles.postList__li} pl-6 mb-5`}>
                        <p className={styles['postList__li--meta']}>
                            <span>2020-07-12 , </span>
                            <span>Life , </span>
                            <span>Thought</span>
                        </p> 
                        <Link href="/">
                            <a className="text-xl">
                            怎么做个自由职业者？
                            </a>
                        </Link> 
                    </li>
                    <li className={`${styles.postList__li} pl-6 mb-5`}>
                        <p className={styles['postList__li--meta']}>
                            <span>2020-07-12 , </span>
                            <span>Life , </span>
                            <span>Thought</span>
                        </p>  
                        <Link href="/">
                            <a className="text-xl">
                            怎么做个自由职业者？
                            </a>
                        </Link>
                    </li>
                </ul>
                <footer className={`${styles['postList--pagination']} text-right pt-12`}>
                    <Link href="/">
                        <a className={styles['postList--moreLink']}>
                            更多文章
                        </a>
                    </Link>
                </footer>
            </div>
    );
}