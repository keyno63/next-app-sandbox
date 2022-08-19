import {useRouter} from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export async function getStaticProps(params: any) {
    // const req = await fetch(`http://localhost:3000/${params.id}.json`)
    // const data = await req.json();
    const data = JSON.parse(`{
      "id": "smartphone",
       "name": "Android",
       "image": ""
    }`)


    return {
        props: {
            product: data,
        },
    };
}

export async function getStaticPaths() {
    // const req = await fetch(`http://localhost:3000/products.json`)
    // const data = await req.json();
    const data = ["smartphone"]


    const paths = data.map((p: string) => {
        return {
            params: {
                id: p,
            }
        }
    })

    return {
        paths,
        fallback: false,
    };
}

const Product = (product: any) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{id}のページです</h1>
                <img src={product.image} width="300" height="400" />
                <p>{product.name}</p>
                <br />
                <Link href="/products">
                    <a>商品一覧へ</a>
                </Link>
            </main>
        </div>
    )
};

export default Product;
