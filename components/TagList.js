import styles from './TagList.module.scss';
import Link from 'next/link'
export default function TagList() {
    return (
            <div className="flex-0.15 bg-white p-8 shadow-lg">
                <h2 className="text-2xl mb-3">
                    标签：
                </h2>
                <ul>
                    <li className="pl-6 mb-5">
                        <Link href="/">
                            <a className={styles.tagList__link}>
                            工作
                            </a>
                        </Link> 
                    </li>
                </ul>
            </div>
    );
}