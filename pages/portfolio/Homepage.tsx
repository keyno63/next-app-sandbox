import {NextPage} from "next";
import Link from "next/link";

const Homepage: NextPage = () => {
    return (
        <div>
            <Link href="/">
                <a>
                    Homepage
                </a>
            </Link>
        </div>
    )
}

export default Homepage;
