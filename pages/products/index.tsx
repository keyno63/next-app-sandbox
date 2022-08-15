import type { NextPage} from "next";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const ProductsList: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2 className={styles.title}>商品一覧</h2>
                <ul>
                    <li>
                        <Link href="/products/smartphone">
                            <a>スマホ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/other">
                            <a>他</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default ProductsList;
